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
}

export class TreeSitterParser {
  private internalParser: InternalTreeSitterParser
  private language: TreeSitterLanguage
  private source: string
  private prevTree?: InternalTreeSitterParser.Tree
  private tree?: InternalTreeSitterParser.Tree
  private parsers: Map<string, Function> = new Map()
  private context!: ParsingContext

  constructor(languageJson: any, initialSource: string) {
    this.source = initialSource
    this.internalParser = new InternalTreeSitterParser()
    this.internalParser.setLanguage(JavaScriptLanguage)
    this.language = new TreeSitterLanguage(languageJson)
  }

  updateSource(changedRanges: SourceEdit) {
    this.tree?.edit(changedRanges)
    this.parse()
  }

  setSource(source: string) {
    this.source = source
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

  parse() {
    this.tree = this.internalParser.parse(this.source, this.prevTree)
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
