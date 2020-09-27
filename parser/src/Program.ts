import JavaScriptLanguageDefinition from '../src/assets/javascript-lang-node-types.json'
import { SyntaxType } from '../tree-sitter-javascript'
import { SyntaxTreeNode } from './SyntaxTreeNode'
import { TreeSitterParser } from './TreeSitterParser'
import cloneDeep from 'lodash.clonedeep'
import { ProgramScanner } from './ProgramScanner'

export interface ImportMap {
  default: string
  named: string[]
  source: string
}

export interface ConstructVars {
  [name: string]: any
}

export interface ConstructContext {
  path: string[]
  node: SyntaxTreeNode
  vars: ConstructVars
  code: string
}

export class Program {
  private parser: TreeSitterParser
  private scanner: ProgramScanner
  public tree: SyntaxTreeNode
  public imports: ImportMap[] = []

  constructor(source: string) {
    this.parser = new TreeSitterParser(JavaScriptLanguageDefinition, source)
    this.tree = this.parser.parse()
    this.scanner = new ProgramScanner()
    this.scan()
  }

  scan() {
    for (const [nodeName, nodes] of Object.entries(this.tree.children)) {
      switch (nodeName) {
        case 'ImportStatement':
          for (const node of nodes) {
            this.scanner.scanImportStatementNode({
              path: [],
              node,
              vars: {},
              code: ''
            })
          }
      }
    }
  }

  print() {
    this.tree.print()
  }
}
