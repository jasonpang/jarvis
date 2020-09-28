import InternalTreeSitterParser from 'tree-sitter'
import JavaScriptLanguage from 'tree-sitter-javascript'
import { SyntaxTreeNode } from './SyntaxTreeNode'
import {
  TreeSitterLanguage,
  TreeSitterLanguageNode
} from './TreeSitterLanguage'

export interface ParsingContext {
  cursor: InternalTreeSitterParser.TreeCursor
  node: SyntaxTreeNode
}

export type Point = {
  row: number
  column: number
}

export type SourceEdit = {
  startIndex: number
  oldEndIndex: number
  newEndIndex: number
  startPosition: Point
  oldEndPosition: Point
  newEndPosition: Point
  text: string
}

export class TreeSitterParser {
  private internalParser: InternalTreeSitterParser
  private language: TreeSitterLanguage
  private source: string[]
  private prevTree?: InternalTreeSitterParser.Tree
  private tree?: InternalTreeSitterParser.Tree
  private parsers: Map<string, Function> = new Map()
  private context!: ParsingContext

  constructor(languageJson: any, initialSource: string | string[]) {
    this.source = Array.isArray(initialSource)
      ? initialSource
      : initialSource.split('\n')
    this.internalParser = new InternalTreeSitterParser()
    this.internalParser.setLanguage(JavaScriptLanguage)
    this.language = new TreeSitterLanguage(languageJson)
  }

  updateSource(changes: SourceEdit[]) {
    for (const change of changes) {
      this.tree?.edit(change)

      const changeLines = change.text.split('\n')

      const numLinesDiff = change.newEndPosition.row - change.oldEndPosition.row

      if (numLinesDiff > 0) {
        /* e.g. Pasting 6 lines of code over 3 lines of code */
        this.source.splice(
          change.oldEndPosition.row + 1,
          0,
          ...Array(numLinesDiff).fill('')
        )
      } else if (numLinesDiff < 0) {
        /* e.g. Replacing 6 lines of code with 3 lines of code in one copy-paste operation */
        this.source.splice(
          change.oldEndPosition.row - -numLinesDiff + 1,
          -numLinesDiff
        )
      }

      for (
        let row = change.startPosition.row;
        row <= change.newEndPosition.row;
        row++
      ) {
        /* Could be adding new lines to a document */
        let content = this.source[row] != null ? this.source[row] : ''

        if (
          row === change.startPosition.row &&
          row < change.newEndPosition.row
        ) {
          /* This is a multiline change and this is the first changed row; the changed column could be in the beginning, middle, end
               ..etc anywhere in this row. */
          content =
            content.slice(0, change.startPosition.column) + changeLines[0]
        } else if (
          row === change.newEndPosition.row &&
          row > change.startPosition.row
        ) {
          /* This is a multiline change and this is the last changed row; the changed column could be in the beginning, middle, end
               ..etc anywhere in this row. */
          const lastChangedLine = changeLines[changeLines.length - 1]
          content =
            lastChangedLine + content.slice(change.oldEndPosition.column)
        } else if (
          row > change.startPosition.row &&
          row < change.newEndPosition.row
        ) {
          /* This is a multiline change and this is between the first and last changed row; the
            entire text in this row is */
          const relativeIncrementIndex = row - change.startPosition.row
          content = changeLines[relativeIncrementIndex]
        } else if (
          row === change.startPosition.row &&
          row === change.newEndPosition.row
        ) {
          /* This is a single-line change. */
          const relativeIncrementIndex = row - change.startPosition.row
          content =
            content.slice(0, change.startPosition.column) +
            changeLines[relativeIncrementIndex] +
            (change.newEndPosition.column - change.oldEndPosition.column > 0
              ? content.slice(change.newEndPosition.column)
              : content.slice(change.oldEndPosition.column))
        }

        this.source[row] = content
      }
    }

    console.clear()
    console.log('Source Code:')
    console.log(this.source)
  }

  private getFormattedNodeName(unformattedOrFormattedNodeName: string) {
    return TreeSitterLanguageNode.getFormattedName(
      unformattedOrFormattedNodeName
    )
  }

  private get currentNode() {
    return this.context.cursor.currentNode
  }

  private get currentNodeFormattedName() {
    return this.getFormattedNodeName(this.currentNode.type)
  }

  private get currentNodeFieldName(): string {
    return (this.context.cursor as any).currentFieldName as string
  }

  getSource(): string[] {
    return this.source
  }

  parse() {
    this.tree = this.internalParser.parse(
      // @ts-ignore
      (index, position) => {
        if (position == null) {
          return undefined
        }

        let line = this.source[position.row]
        if (line) {
          return line.slice(position.column)
        } else {
          console.error('Could not find column:', position.column)
          return ''
        }
      },
      this.prevTree
    )
    this.prevTree = this.tree

    this.context = {
      cursor: this.tree.walk(),
      node: new SyntaxTreeNode(this.tree.rootNode)
    }

    // console.log(
    //   `%cↂ %cAbstract Syntax Tree\t%c${this.tree.rootNode.toString().trim()}`,
    //   'font-weight: bold; color: #faf39f;',
    //   'font-weight: semibold; color: #faf39f;',
    //   'color: #637777;'
    // )

    let count = 15000
    while (count > 0 && this.traversePreorder()) {
      count -= 1
    }

    return this.context.node
  }

  private traversePreorder(): boolean {
    if (this.context.cursor.gotoFirstChild()) {
      /* Navigated to a child node */
      const current = this.context.node
      const nodeName = this.currentNodeFormattedName

      if (this.currentNodeFieldName) {
        const fieldName = this.currentNodeFieldName

        const newNode = new SyntaxTreeNode(this.currentNode)
        newNode.fieldName = fieldName
        newNode.parent = current
        newNode.depth = current.depth + 1

        current.fields[fieldName] ||= []
        current.fields[fieldName].push(newNode)

        this.context.node = newNode
      } else {
        if (this.currentNode.isNamed) {
          const newNode = new SyntaxTreeNode(this.currentNode)
          newNode.parent = current
          newNode.depth = current.depth + 1

          current.children[nodeName] ||= []
          current.children[nodeName].push(newNode)

          this.context.node = newNode
        } else {
          current.literals[nodeName] = new SyntaxTreeNode(this.currentNode)
          current.literals[nodeName].parent = current

          this.context.node = current.literals[nodeName]
          this.context.node.depth = this.context.node.parent.depth + 1
        }
      }
      return true
    }
    while (!this.context.cursor.gotoNextSibling()) {
      if (!this.context.cursor.gotoParent()) {
        /* The entire tree's pre-order traversal is complete */
        return false
      } else {
        /* Navigated to a parent node after exhausting all sibling nodes*/
        this.context.node = this.context.node.parent
      }
    }

    /* Navigated to a sibling node */
    if (this.currentNodeFieldName) {
      this.context.node = this.context.node.parent
      const fieldName = this.currentNodeFieldName

      const current = this.context.node

      const newNode = new SyntaxTreeNode(this.currentNode)
      newNode.fieldName = fieldName
      newNode.parent = current
      newNode.depth = current.depth + 1

      current.fields[fieldName] ||= []
      current.fields[fieldName].push(newNode)

      this.context.node = newNode
    } else {
      if (this.currentNode.isNamed) {
        this.context.node = this.context.node.parent

        const current = this.context.node
        const nodeName = this.currentNodeFormattedName

        const newNode = new SyntaxTreeNode(this.currentNode)
        newNode.parent = current
        newNode.depth = current.depth + 1

        current.children[nodeName] ||= []
        current.children[nodeName].push(newNode)

        this.context.node = newNode
      } else {
        this.context.node = this.context.node.parent
        const nodeName = this.currentNodeFormattedName

        const current = this.context.node
        current.literals[nodeName] = new SyntaxTreeNode(this.currentNode)
        current.literals[nodeName].parent = current

        this.context.node = current.literals[nodeName]
        this.context.node.depth = this.context.node.parent.depth + 1
      }
    }
    return true
  }
}
