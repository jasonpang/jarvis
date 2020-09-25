import InternalTreeSitterParser, { TreeCursor, SyntaxNode } from 'tree-sitter'
import JavaScriptLanguage from 'tree-sitter-javascript'
import {
  TreeSitterLanguage,
  TreeSitterLanguageNode
} from './TreeSitterLanguage'
import { LanguageNodeKind } from './types'

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
  //a

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

    let context = {
      cursor: this.tree.walk(),
      currentParsedNode: {},
      depth: 0
    }

    console.log(
      `%cↂ %cAbstract Syntax Tree\t%c${this.tree.rootNode.toString().trim()}`,
      'font-weight: bold; color: #faf39f;',
      'font-weight: semibold; color: #faf39f;',
      'color: #637777;'
    )

    do {
      const formattedNodeName = TreeSitterLanguageNode.getFormattedName(
        context.cursor.nodeType
      )
      const currentNodeParser = this.parsers.get(formattedNodeName)
      if (typeof currentNodeParser === 'function') {
        context.currentParsedNode = {
          ...context.currentParsedNode,
          ...currentNodeParser(context.cursor.currentNode, context)
        }
      }
    } while (this.gotoPreorderSucc(context))

    return context.currentParsedNode
  }

  private gotoPreorderSucc(context: {
    cursor: InternalTreeSitterParser.TreeCursor
    currentParsedNode: any
    depth: number
  }): boolean {
    if (context.cursor.gotoFirstChild()) {
      context.depth += 1
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
      } else {
        context.depth -= 1
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
    function getTabs(n: number) {
      let c = 0,
        res = ''
      while (c++ < n) res += '\t'
      return res
    }

    let functionName = `parse${languageNode.type}Node`
    const __objForFnName = {
      [functionName]: (
        node: SyntaxNode,
        context: {
          cursor: InternalTreeSitterParser.TreeCursor
          currentParsedNode: any
          depth: number
        },
        opts: {
          hideNodePrint: boolean
        } = {
          hideNodePrint: false
        }
      ) => {
        // if (!opts.hideNodePrint) {
        //   const lines = node.text.trim().split('\n')

        //   console.log(
        //     `${getTabs(context.depth)}%cↂ %c${languageNode.type}\t%c${
        //       context.cursor.currentFieldName
        //     }\t%c${
        //       lines.length > 1
        //         ? `${lines[0]} ... (${lines.length - 2} more lines) ... ${
        //             lines[lines.length - 1]
        //           }`
        //         : node.text.trim()
        //     }`,
        //     'font-weight: bold; color: #7fdbca;',
        //     'font-weight: semibold; color: #7fdbca;',
        //     'font-weight: semibold; color: #faf39f;',
        //     'color: #637777;'
        //   )
        // }
        const lines = node.text.trim().split('\n')

        if (context.cursor.currentFieldName) {
          const fieldName = context.cursor.currentFieldName
          const fieldType = context.cursor.currentNode.type
          const formattedFieldType = TreeSitterLanguageNode.getFormattedName(
            fieldType
          )

          console.log(
            `${getTabs(
              context.depth
            )}%c⊙ ${fieldName}%c: ${formattedFieldType}\t%c${
              lines.length > 1
                ? `${lines[0]} ... (${lines.length - 2} more lines) ... ${
                    lines[lines.length - 1]
                  }`
                : node.text.trim()
            }`,
            'font-weight: bold; color: #82AAFF;',
            'font-weight: normal; color: #7493C1;',
            'color: #637777;'
          )
        } else {
          console.log(
            `${getTabs(context.depth)}%cↂ %c${languageNode.type}\t%c${
              lines.length > 1
                ? `${lines[0]} ... (${lines.length - 2} more lines) ... ${
                    lines[lines.length - 1]
                  }`
                : node.text.trim()
            }`,
            'font-weight: bold; color: #7fdbca;',
            'font-weight: semibold; color: #7fdbca;',
            'color: #637777;'
          )
        }
        const result: any = {}

        if (!languageNode.named) {
          result.literal = languageNode.type
          return result
        }

        if (
          languageNode.kind === LanguageNodeKind.Supertype ||
          !Array.isArray(node.fields)
        ) {
          return result
        }

        // for (const fieldName of node.fields) {
        //   const fieldNode = node[fieldName]

        //   if (fieldNode == null) {
        //     continue
        //   }

        //   const fieldType = fieldNode.type
        //   debugger
        //   const parserFn = this.parsers.get(fieldType) // infinite loop if formattenodeype
        //   if (parserFn) {
        //     if (!result[fieldName]) {
        //       result[fieldName] = {}
        //     }
        //     try {
        //       result[fieldName][fieldType] = parserFn(node, context, {
        //         hideNodePrint: false
        //       })
        //     } catch (e) {
        //       console.error('Caught error while parsing field', fieldName, e)
        //     }
        //     // console.log(
        //     //   getTabs(context.depth + 1),
        //     //   '⋮',
        //     //   `${fieldName} ⟶ ${fieldType}`,
        //     //   result[fieldName][fieldType],
        //     //   node.fields
        //     // )
        //     console.log('GOT HEREEEEEEEEEEEe')
        //     console.log(
        //       `${getTabs(
        //         context.depth + 1
        //       )}%c⋮ %c${fieldName} ⟶ ${fieldType}\t%c${
        //         result[fieldName][fieldType]
        //       }`,
        //       'font-weight: bold; color: #82AAFF;',
        //       'font-weight: semibold; color: #82AAFF;',
        //       'color: #637777;'
        //     )
        //   } else {
        //     if (!result[fieldName]) {
        //       result[fieldName] = fieldNode.text
        //     }
        // console.log(
        //   `${getTabs(
        //     context.depth + 1
        //   )}%c⋮ %c${fieldName} ⟶ ${fieldType}\t%c${result[fieldName]}`,
        //   'font-weight: bold; color: #82AAFF;',
        //   'font-weight: semibold; color: #82AAFF;',
        //   'color: #637777;'
        // )
        //   }
        // }

        return result
      }
    }
    return __objForFnName[functionName]
  }
}
