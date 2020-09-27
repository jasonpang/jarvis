import { SyntaxNode } from 'tree-sitter'
import { TreeSitterLanguageNode } from './TreeSitterLanguage'

export interface SyntaxTreeNodeFields {
  [fieldName: string]: SyntaxTreeNode[]
}

export interface SyntaxTreeNodeLiterals {
  [literal: string]: SyntaxTreeNode
}

export interface SyntaxTreeNodeChildren {
  [nodeType: string]: SyntaxTreeNode[]
}

export type SyntaxSourcePoint = {
  row: number
  column: number
}

export interface SyntaxTreeNodeSourcePosition {
  startPosition: SyntaxSourcePoint
  endPosition: SyntaxSourcePoint
  startIndex: number
  endIndex: number
}

export class SyntaxTreeNode {
  public sourcePosition: SyntaxTreeNodeSourcePosition
  public fields: SyntaxTreeNodeFields = Object.create(null)
  public literals: SyntaxTreeNodeLiterals = Object.create(null)
  public children: SyntaxTreeNodeChildren = Object.create(null)
  public parent: SyntaxTreeNode = this
  public depth: number = 0
  /**
   * Get a numeric id for this node that is unique.
   *
   * Within a given syntax tree, no two nodes have the same id. However, if a new tree is created based on an older tree, and a node from the old tree is reused in the process, then that node will have the same id in both trees.
   */
  public id: number
  /**
   * The source code belonging to this node.
   */
  public text: string
  /**
   * The field name if present.
   */
  public fieldName: string
  /**
   * The type as defined in the node-types.json, but formatted.
   */
  public type: string
  /**
   * Check if this node is named.
   */
  public isNamed: boolean
  /**
   * Check if this node has been edited.
   */
  public hasChanges: boolean
  /**
   * Check if this node represents a syntax error or contains any syntax errors anywhere within it.
   */
  public hasError: boolean
  /**
   * Check if this node is missing.
   *
   * Missing nodes are inserted by the parser in order to recover from certain kinds of syntax errors.
   */
  public isMissing: boolean

  constructor(syntaxNode: SyntaxNode) {
    this.sourcePosition = {
      startPosition: syntaxNode.startPosition,
      endPosition: syntaxNode.endPosition,
      startIndex: syntaxNode.startIndex,
      endIndex: syntaxNode.endIndex
    }
    this.id = (syntaxNode as any)[0] as number
    this.text = syntaxNode.text
    this.type = TreeSitterLanguageNode.getFormattedName(syntaxNode.type)
    this.fieldName = (syntaxNode as any).currentFieldName as string
    this.isNamed = syntaxNode.isNamed
    this.hasChanges = syntaxNode.hasChanges()
    this.hasError = syntaxNode.hasError()
    this.isMissing = syntaxNode.isMissing()
  }

  where(nodeName: string) {
    if (this.children[nodeName]) {
      return [this.children[nodeName]].flat()
    }

    if (this.fields[nodeName]) {
      return [this.fields[nodeName]].flat()
    }

    if (this.literals[nodeName]) {
      return [this.literals[nodeName]].flat()
    }

    return []
  }

  find(nodeName: string) {
    return this.where(nodeName)[0]
  }

  print(
    {
      printAsField,
      fieldName
    }: { printAsField: boolean; fieldName: string } = {
      printAsField: false,
      fieldName: ''
    }
  ) {
    const lines = this.text.trim().split('\n')

    if (printAsField) {
      console.log(
        `${getTabs(this.depth)}%c⊙ ${fieldName}%c: ${this.type}\t%c${
          lines.length > 1
            ? `${lines[0]} ... (${lines.length - 2} more lines) ... ${
                lines[lines.length - 1]
              }`
            : this.text.trim()
        }`,
        'font-weight: bold; color: #82AAFF;',
        'font-weight: normal; color: #7493C1;',
        'color: #637777;'
      )
    } else {
      if (this.isNamed) {
        console.log(
          `${getTabs(this.depth)}%cↂ %c${this.type}\t%c${
            lines.length > 1
              ? `${lines[0]} ... (${lines.length - 2} more lines) ... ${
                  lines[lines.length - 1]
                }`
              : this.text.trim()
          }`,
          'font-weight: bold; color: #7fdbca;',
          'font-weight: semibold; color: #7fdbca;',
          'color: #637777;'
        )
      }
    }

    for (const [fieldName, fieldNodes] of Object.entries(this.fields)) {
      for (const fieldNode of fieldNodes) {
        fieldNode.print({
          printAsField: true,
          fieldName
        })
      }
    }

    for (const [childName, childNodes] of Object.entries(this.children)) {
      for (const childNode of childNodes) {
        childNode.print({
          printAsField: false,
          fieldName: ''
        })
      }
    }
  }
}

function getTabs(count: number) {
  let i = 0,
    tabs = ''
  while (i++ < count) tabs += '\t'
  return tabs
}
