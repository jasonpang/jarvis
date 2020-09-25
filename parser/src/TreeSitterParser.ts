import InternalTreeSitterParser, { TreeCursor, SyntaxNode } from 'tree-sitter'
import JavaScriptLanguage from 'tree-sitter-javascript'
import { TypedTreeCursor, SyntaxType } from '../tree-sitter-javascript'
import {
  TreeSitterLanguage,
  TreeSitterLanguageNode
} from './TreeSitterLanguage'
import { JsonObject, LanguageNodeKind } from './types'

export class TreeSitterParser {
  private internalParser: InternalTreeSitterParser
  private language: TreeSitterLanguage
  private source: string
  private prevTree?: InternalTreeSitterParser.Tree
  private tree?: InternalTreeSitterParser.Tree
  private parsers: Map<string, Function> = new Map()

  constructor(languageJson: any, initialSource: string) {
    this.source = initialSource
    this.internalParser = new InternalTreeSitterParser()
    this.internalParser.setLanguage(JavaScriptLanguage)
    this.language = new TreeSitterLanguage(languageJson)
    for (const node of this.language.definition) {
      this.parsers.set(
        node.type,
        this._constructParser({
          languageNode: node
        })
      )
    }
  }

  updateSource(changedRanges: any) {}

  setSource(source: string) {
    this.source = source
  }

  parse() {
    this.tree = this.internalParser.parse(this.source, this.prevTree)
    this.prevTree = this.tree

    if (!this.tree) {
      return console.error('Unable to parse tree.')
    }

    const rootType = this.tree.rootNode.type
    const parserForRootType = this.parsers.get(
      TreeSitterLanguageNode.getFormattedName(rootType)
    )

    if (!parserForRootType) {
      return console.error(
        'Unable to find parser handler for node type:',
        rootType
      )
    }

    const rootParsedNode = parserForRootType(this.tree.rootNode)

    let context = {
      cursor: this.tree.walk(),
      currentParsedNode: rootParsedNode
    }

    do {
      const formattedNodeName = TreeSitterLanguageNode.getFormattedName(
        context.cursor.nodeType
      )
      const currentNodeParser = this.parsers.get(formattedNodeName)
      if (typeof currentNodeParser === 'function') {
        context.currentParsedNode = {
          ...context.currentParsedNode,
          ...currentNodeParser(context.cursor.currentNode)
        }
      }
    } while (this.gotoPreorderSucc(context))

    return context.currentParsedNode
  }

  private gotoPreorderSucc(context: {
    cursor: InternalTreeSitterParser.TreeCursor
    currentParsedNode: any
  }): boolean {
    if (context.cursor.gotoFirstChild()) {
      const formattedNodeName = TreeSitterLanguageNode.getFormattedName(
        context.cursor.nodeType
      )
      context.currentParsedNode[formattedNodeName] ||= {}
      context.currentParsedNode[formattedNodeName].parent =
        context.currentParsedNode
      context.currentParsedNode = context.currentParsedNode[formattedNodeName]
      return true
    }
    while (!context.cursor.gotoNextSibling()) {
      if (!context.cursor.gotoParent()) {
        return false
      }
    }

    const formattedNodeName = TreeSitterLanguageNode.getFormattedName(
      context.cursor.nodeType
    )
    context.currentParsedNode[formattedNodeName] ||= {}
    context.currentParsedNode[formattedNodeName].parent =
      context.currentParsedNode
    context.currentParsedNode = context.currentParsedNode[formattedNodeName]
    return true
  }

  private _constructParser({
    languageNode
  }: {
    languageNode: TreeSitterLanguageNode
  }) {
    let functionName = `parse${languageNode.type}Node`
    const __objForFnName = {
      [functionName]: (node: SyntaxNode) => {
        console.log('Parsing:', languageNode.type)
        const result: any = {}

        if (!languageNode.named) {
          result.literal = languageNode.type
          return result
        }

        if (
          languageNode.kind === LanguageNodeKind.Supertype ||
          !(languageNode.fields instanceof Map)
        ) {
          return result
        }

        const formattedNodeType = languageNode.getFormattedName(node.type)

        for (const [fieldName, subtype] of languageNode.fields.entries()) {
          const parserFn = this.parsers.get(fieldName) // infinit eloop if formattednodetype
          if (parserFn) {
            result[fieldName] = parserFn(node)
            console.log('   Parsing Field:', fieldName, result[fieldName])
          }
        }

        return result
      }
    }
    return __objForFnName[functionName]
  }
}
