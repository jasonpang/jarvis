import JavaScriptLanguageDefinition from '../src/assets/javascript-lang-node-types.json'
import { SyntaxType } from '../tree-sitter-javascript'
import { SyntaxTreeNode } from './SyntaxTreeNode'
import { TreeSitterParser } from './TreeSitterParser'
import cloneDeep from 'lodash.clonedeep'
import { ProgramScanner } from './ProgramScanner'

export interface ImportMap {
  default: string
  namespace: string
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
            const context = {
              path: [nodeName],
              node,
              vars: {},
              code: ''
            }
            this.scanner.scanImportStatementNode(context)

            this.imports.push({
              namespace: Object.keys(context.vars)
                .filter(x => x.includes('NamespaceImport.Identifier'))
                .map(key => (context.vars as any)[key])[0],
              default: Object.keys(context.vars)
                .filter(x => x.includes('ImportClause.Identifier'))
                .map(key => (context.vars as any)[key])[0],
              named: Object.keys(context.vars)
                .filter(
                  x =>
                    x.includes('ImportSpecifier.name') ||
                    x.includes('ImportSpecifier.alias')
                )
                .map(key => (context.vars as any)[key]),
              source: (context.vars as any)['ImportStatement.source']
            })
            console.log(`ImportStatement Scan (${node.text}):`, context.vars)
          }
      }
    }
  }

  print() {
    this.tree.print()
  }
}
