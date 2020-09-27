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
    const code = []
    const nodeName = this.getName(context.path[context.path.length - 1])
    const nodeDefinition = this.language.definition.find(
      x => this.getName(x.type).formatted === nodeName.formatted
    )

    if (!nodeDefinition) {
      return ''
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

    code.push(this.getCodeForComment(`Node: ${nodeName.formatted}`))

    if (isLiteralNodeKind) {
      code.push(`const pathVarName = context.path
        .join('.')`)
      code.push(`context.vars[pathVarName] = context.node.text`)
    }

    for (const [
      _fieldName,
      _fieldNodeTypeNames
    ] of nodeDefinition.fields.entries()) {
      const fieldName = this.getName(_fieldName)

      for (const _fieldNodeTypeName of _fieldNodeTypeNames) {
        const fieldNodeTypeName = this.getName(_fieldNodeTypeName)

        code.push(
          this.getCodeForComment(
            `Field: ${fieldName.camelized}: ${fieldNodeTypeName.formatted}`
          )
        )

        context.path.push(fieldNodeTypeName.formatted)

        code.push(
          this.getCodeForIfStatement(
            `context.node.fields['${fieldName.formatted}']`,
            this.getCodeForLoopForOf(
              'fieldNode',
              `context.node.fields['${fieldName.formatted}']`,
              this.getCodeForIfStatement(
                `fieldNode.type === '${fieldNodeTypeName.formatted}'`,
                `const contextClone = cloneDeep(context)
                 contextClone.path.push('${fieldNodeTypeName.formatted}');
                this.scan${fieldNodeTypeName.formatted}Node(contextClone)`,
                ''
              )
            ),
            ''
          )
        )
      }
    }

    return code.join('\n')
  }

  private getCodeTemplateForNodeScanner(body: string): string {
    const nodeName = this.getName(this.nodeName)

    return `scan${nodeName.formatted}Node(context: ConstructContext) {
        ${body}
    }\n`
  }

  private getCodeForComment(comment: string) {
    return `// ${comment}`
  }

  private getCodeForLoopForOf(left: string, right: string, body: string) {
    return `
    for (const ${left} of ${right}) {
        ${body}
    }`.trimStart()
  }

  private getCodeForIfStatement(
    condition: string,
    consequence: string,
    alternative: string
  ) {
    return `if (${condition}) { ${consequence} }${
      alternative ? `else { ${alternative} }` : ''
    }\n`
  }

  generate(nodeNames: string[]) {
    const code = `
    import JavaScriptLanguageDefinition from '../src/assets/javascript-lang-node-types.json'
    import { SyntaxType } from '../tree-sitter-javascript'
    import { SyntaxTreeNode } from './SyntaxTreeNode'
    import { TreeSitterParser } from './TreeSitterParser'
    import cloneDeep from 'lodash.clonedeep'
    import { ConstructContext } from './ProgramScannerGenerator'

    export class ProgramScanner {
        ${nodeNames.map(x => this.generateSingle(x)).join('\n')}
    }`

    // console.log()
    // console.log(code)

    const result = prettier.format(code, prettierFormatOpts)

    console.log()
    console.log(result)
    return result
  }

  private generateSingle(nodeName: string) {
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

function tabs(count: number) {
  let i = 0,
    tabs = ''
  while (i++ < count) tabs += '\t'
  return tabs
}
