import InternalTreeSitterParser, { TreeCursor, SyntaxNode } from 'tree-sitter'
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

  updateSource(changedRanges: any) {}

  setSource(source: string) {
    this.source = source
  }

  getFormattedNodeName(unformattedOrFormattedNodeName: string) {
    const isNameUnformatted = unformattedOrFormattedNodeName.includes('_')

    return isNameUnformatted
      ? TreeSitterLanguageNode.getFormattedName(unformattedOrFormattedNodeName)
      : unformattedOrFormattedNodeName
  }

  get currentNode() {
    return this.context.cursor.currentNode
  }

  get currentNodeFormattedName() {
    return this.getFormattedNodeName(this.currentNode.type)
  }

  get currentNodeFieldName(): string {
    return (this.context.cursor as any).currentFieldName as string
  }

  parse() {
    this.tree = this.internalParser.parse(this.source, this.prevTree)
    this.prevTree = this.tree

    if (!this.tree) {
      return console.error('Unable to parse tree.')
    }

    this.context = {
      cursor: this.tree.walk(),
      node: new SyntaxTreeNode(this.tree.rootNode)
    }

    console.log(
      `%cↂ %cAbstract Syntax Tree\t%c${this.tree.rootNode.toString().trim()}`,
      'font-weight: bold; color: #faf39f;',
      'font-weight: semibold; color: #faf39f;',
      'color: #637777;'
    )

    while (this.traversePreorder()) {}

    return this.context.node
  }

  private traversePreorder(): boolean {
    if (this.context.cursor.gotoFirstChild()) {
      /* Navigated to a child node */
      const current = this.context.node
      const nodeName = this.currentNodeFormattedName

      if (this.currentNode.isNamed) {
        current.children[nodeName] = new SyntaxTreeNode(this.currentNode)
        current.children[nodeName].parent = current

        this.context.node = current.children[nodeName]
        this.context.node.depth = this.context.node.parent.depth + 1
      } else {
        current.literals[nodeName] = new SyntaxTreeNode(this.currentNode)
        current.literals[nodeName].parent = current

        this.context.node = current.literals[nodeName]
        this.context.node.depth = this.context.node.parent.depth + 1
      }
      return true
    }
    while (!this.context.cursor.gotoNextSibling()) {
      if (!this.context.cursor.gotoParent()) {
        /* The entire tree's pre-order traversal is complete */
        return false
      } else {
        /* Navigated to a parent node after exhausting all sibling nodes */
        this.context.node = this.context.node.parent
      }
    }

    /* Navigated to a sibling node */
    if (this.currentNodeFieldName) {
      this.context.node = this.context.node.parent
      const fieldName = this.currentNodeFieldName

      const current = this.context.node
      current.fields[fieldName] = new SyntaxTreeNode(this.currentNode)
      current.fields[fieldName].parent = current

      this.context.node = current.fields[fieldName]
      this.context.node.depth = this.context.node.parent.depth + 1
    } else {
      if (this.currentNode.isNamed) {
        this.context.node = this.context.node.parent
        const nodeName = this.currentNodeFormattedName

        const current = this.context.node
        current.children[nodeName] = new SyntaxTreeNode(this.currentNode)
        current.children[nodeName].parent = current

        this.context.node = current.children[nodeName]
        this.context.node.depth = this.context.node.parent.depth + 1
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
