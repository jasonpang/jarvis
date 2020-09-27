import InternalTreeSitterParser, { TreeCursor, SyntaxNode } from 'tree-sitter'
import JavaScriptLanguage from 'tree-sitter-javascript'
import { SyntaxTreeNode } from './SyntaxTreeNode'
import {
  TreeSitterLanguage,
  TreeSitterLanguageNode
} from './TreeSitterLanguage'
import { DefinitionChild } from './types'
import prettier from 'prettier'
import { camelize } from 'humps'
import startCase from 'lodash.startcase'

export const prettierFormatOpts = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'avoid'
} as any

export interface ConstructVars {
  [name: string]: any
}

export interface ConstructContext {
  path: string[]
  node: SyntaxTreeNode
  vars: ConstructVars
  code: string
}

export class ProgramScannerGenerator {
  private language: TreeSitterLanguage
  private nodeName: string = ''
  private context: ConstructContext

  constructor(languageJson: any) {
    this.language = new TreeSitterLanguage(languageJson)
    this.context = {
      path: [],
      // @ts-ignore
      node: null,
      vars: {},
      code: ''
    }
  }

  private getName(nodeName: string) {
    return {
      formatted: TreeSitterLanguageNode.getFormattedName(nodeName),
      camelized: camelize(TreeSitterLanguageNode.getFormattedName(nodeName))
    }
  }

  private getCodeTemplateBodyForNodeScanner(context: ConstructContext): string {
    const code: string[] = []
    const nodeName = this.getName(context.path[context.path.length - 1])
    const nodeDefinition = this.language.definition.find(
      x => this.getName(x.type).formatted === nodeName.formatted
    )

    if (!nodeDefinition) {
      return code.join('\n')
    }

    const isSkippableNode = !nodeDefinition.named

    const isLiteralNodeKind =
      nodeDefinition.type === 'String' ||
      (nodeDefinition.named &&
        !nodeDefinition.children.length &&
        !nodeDefinition.fields.size)

    if (isSkippableNode) {
      return ''
    }

    code.push(`/* [Node] ${nodeName.formatted} */\n`)

    if (isLiteralNodeKind) {
      code.push(`const pathVarName = context.path
        .join('.')`)
      code.push(`context.vars[pathVarName] ||= []`)
      code.push(`context.vars[pathVarName].push(context.node.text)`)
      return code.join('\n')
    }

    for (const [
      _fieldName,
      _fieldNodeInfos
    ] of nodeDefinition.fieldsInfo.entries()) {
      const fieldName = this.getName(_fieldName)

      for (const _fieldNodeTypeName of _fieldNodeInfos.types
        .filter(x => x.named)
        .map(x => x.type)) {
        const fieldNodeTypeName = this.getName(_fieldNodeTypeName)

        code.push(`
        /* [Field] ${fieldName.camelized}: ${fieldNodeTypeName.formatted} */
        if (context.node.fields['${fieldName.camelized}']) {
            for (const fieldNode of context.node.fields['${fieldName.camelized}']) {
                context.node = fieldNode
                context.path.push(fieldNode.fieldName ? '${fieldName.camelized}' : '${fieldNodeTypeName.formatted}')

                // Get the field's value
                this.scan${fieldNodeTypeName.formatted}Node(context)

                // Go back to parent
                context.node = context.node.parent
                context.path.pop()
            }
        }
        `)
      }
    }

    const children =
      nodeDefinition.childrenInfo?.types
        .filter(x => x.named)
        .map(x => x.type) || []
    for (const _childNodeName of children) {
      const childNodeName = this.getName(_childNodeName)

      code.push(`
        /* [Child] ${childNodeName.formatted} */
        if (context.node.children['${childNodeName.formatted}']) {
            for (const subChildNode of context.node.children['${childNodeName.formatted}']) {
                context.node = subChildNode
                context.path.push('${childNodeName.formatted}')

                // Get the field's value
                this.scan${childNodeName.formatted}Node(context)

                // Go back to parent
                context.node = context.node.parent
                context.path.pop()
            }
        }
        `)
    }

    return code.join('\n')
  }

  private getCodeTemplateForNodeScanner(body: string): string {
    const nodeName = this.getName(this.nodeName)

    return `scan${nodeName.formatted}Node(context: ConstructContext) {
        ${body}
    }\n`
  }

  generate(nodeNames: string[]) {
    const code = `
    /* This is an auto-generated file. Last Updated: ${new Date().toLocaleString(
      'en-US'
    )} */

    import JavaScriptLanguageDefinition from '../src/assets/javascript-lang-node-types.json'
    import { SyntaxType } from '../tree-sitter-javascript'
    import { SyntaxTreeNode } from './SyntaxTreeNode'
    import { TreeSitterParser } from './TreeSitterParser'
    import cloneDeep from 'lodash.clonedeep'
    import { ConstructContext } from './ProgramScannerGenerator'

    export class ProgramScanner {
        ${nodeNames.map(x => this.generateScannerCodeForNodeName(x)).join('\n')}
    }`

    // console.log(code)dd

    const result = prettier.format(code, prettierFormatOpts)

    console.log()
    console.log(result)
    return result
  }

  private generateScannerCodeForNodeName(nodeName: string) {
    this.nodeName = this.getName(nodeName).formatted
    this.context = {
      path: [this.nodeName],
      // @ts-ignore
      node: null,
      vars: {},
      code: ''
    }

    return this.getCodeTemplateForNodeScanner(
      this.getCodeTemplateBodyForNodeScanner(this.context)
    )
  }
}
