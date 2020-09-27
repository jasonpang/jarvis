import JavaScriptLanguageDefinition from './assets/javascript-lang-node-types.json'
import { SyntaxTreeNode } from './SyntaxTreeNode'
import { SourceEdit, TreeSitterParser } from './TreeSitterParser'
import { ProgramScanner } from './ProgramScanner'

export interface ImportMap {
  default: string[]
  namespace: string[]
  named: string[]
  source: string[]
}
export interface ExportMap {
  default: string[]
  namespace: string[]
  named: string[]
  source: string[]
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
  public exports: ExportMap[] = []

  constructor(private source: string) {
    this.parser = new TreeSitterParser(JavaScriptLanguageDefinition, source)
    this.tree = this.parser.parse()
    this.scanner = new ProgramScanner()
    this.scan()
  }

  getVarsFor(context: ConstructContext, patterns: string[]) {
    return Object.keys(context.vars)
      .filter(x => patterns.some(y => x.includes(y)))
      .map(key => (context.vars as any)[key])
  }

  updateSource(deltas: SourceEdit[]) {
    this.parser.updateSource(deltas)
    console.log('Updating deltas and setting new source code...', deltas)
  }

  scan() {
    this.tree = this.parser.parse()
    this.imports = []
    this.exports = []
    console.log('Reparsing...:')

    for (const [nodeName, nodes] of Object.entries(this.tree.children)) {
      switch (nodeName) {
        case 'ImportStatement': {
          for (const node of nodes) {
            const context = {
              path: [nodeName],
              node,
              vars: {},
              code: ''
            }
            this.scanner.scanImportStatementNode(context)

            this.imports.push({
              namespace: this.getVarsFor(context, [
                'NamespaceImport.Identifier'
              ]),
              default: this.getVarsFor(context, ['ImportClause.Identifier']),
              named: this.getVarsFor(context, [
                'ImportSpecifier.name',
                'ImportSpecifier.alias'
              ]),
              source: this.getVarsFor(context, ['ImportStatement.source'])
            })
            // console.log(`ImportStatement Scan (${node.text}):`, context.vars)
          }
          break
        }
        case 'ExportStatement': {
          for (const node of nodes) {
            const context = {
              path: [nodeName],
              node,
              vars: {},
              code: ''
            }
            this.scanner.scanExportStatementNode(context)

            this.exports.push({
              namespace: this.getVarsFor(context, [
                'NamespaceExport.Identifier'
              ]),
              default: this.getVarsFor(context, [
                'ExportClause.Identifier',
                'ExportStatement.value.name'
              ]),
              named: this.getVarsFor(context, [
                'ExportSpecifier.name',
                'ExportStatement.declaration.name',
                'ExportSpecifier.alias'
              ]),
              source: this.getVarsFor(context, ['ExportStatement.source'])[0]
            })
            // console.log(`ExportStatement Scan (${node.text}):`, context.vars)
          }
          break
        }
      }
    }
  }

  print() {
    this.tree.print()
  }
}
