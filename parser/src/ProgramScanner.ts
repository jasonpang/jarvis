import JavaScriptLanguageDefinition from '../src/assets/javascript-lang-node-types.json'
import { SyntaxType } from '../tree-sitter-javascript'
import { SyntaxTreeNode } from './SyntaxTreeNode'
import { TreeSitterParser } from './TreeSitterParser'
import cloneDeep from 'lodash.clonedeep'
import { ConstructContext } from './ProgramScannerGenerator'

export class ProgramScanner {
  scanStringNode(context: ConstructContext) {
    // Node: String
    const pathVarName = context.path.join('.')
    context.vars[pathVarName] = context.node.text
  }

  scanImportStatementNode(context: ConstructContext) {
    // Node: ImportStatement
    // Field: source: String
    if (context.node.fields['Source']) {
      for (const fieldNode of context.node.fields['Source']) {
        if (fieldNode.type === 'String') {
          const contextClone = cloneDeep(context)
          contextClone.path.push('String')
          this.scanStringNode(contextClone)
        }
      }
    }
  }
}
