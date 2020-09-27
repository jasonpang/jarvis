/* This is an auto-generated file. Last Updated: 9/26/2020, 6:40:36 PM */

import JavaScriptLanguageDefinition from '../src/assets/javascript-lang-node-types.json'
import { SyntaxType } from '../tree-sitter-javascript'
import { SyntaxTreeNode } from './SyntaxTreeNode'
import { TreeSitterParser } from './TreeSitterParser'
import cloneDeep from 'lodash.clonedeep'
import { ConstructContext } from './ProgramScannerGenerator'

export class ProgramScanner {
  scanArgumentsNode(context: ConstructContext) {
    /* [Node] Arguments */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SpreadElement */
    if (context.node.children['SpreadElement']) {
      for (const subChildNode of context.node.children['SpreadElement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanArrayNode(context: ConstructContext) {
    /* [Node] Array */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SpreadElement */
    if (context.node.children['SpreadElement']) {
      for (const subChildNode of context.node.children['SpreadElement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanArrayPatternNode(context: ConstructContext) {
    /* [Node] ArrayPattern */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SpreadElement */
    if (context.node.children['SpreadElement']) {
      for (const subChildNode of context.node.children['SpreadElement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanArrowFunctionNode(context: ConstructContext) {
    /* [Node] ArrowFunction */

    /* [Field] body: Expression */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] body: StatementBlock */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] parameter: Identifier */
    if (context.node.fields['parameter']) {
      for (const fieldNode of context.node.fields['parameter']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'parameter' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] parameters: FormalParameters */
    if (context.node.fields['parameters']) {
      for (const fieldNode of context.node.fields['parameters']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'parameters' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanAssignmentExpressionNode(context: ConstructContext) {
    /* [Node] AssignmentExpression */

    /* [Field] left: DestructuringPattern */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: Identifier */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: MemberExpression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: ParenthesizedExpression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: SubscriptExpression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] right: Expression */
    if (context.node.fields['right']) {
      for (const fieldNode of context.node.fields['right']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'right' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanAssignmentPatternNode(context: ConstructContext) {
    /* [Node] AssignmentPattern */

    /* [Field] left: DestructuringPattern */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: ShorthandPropertyIdentifier */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] right: Expression */
    if (context.node.fields['right']) {
      for (const fieldNode of context.node.fields['right']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'right' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanAugmentedAssignmentExpressionNode(context: ConstructContext) {
    /* [Node] AugmentedAssignmentExpression */

    /* [Field] left: Identifier */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: MemberExpression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: ParenthesizedExpression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: SubscriptExpression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] right: Expression */
    if (context.node.fields['right']) {
      for (const fieldNode of context.node.fields['right']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'right' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanAwaitExpressionNode(context: ConstructContext) {
    /* [Node] AwaitExpression */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanBinaryExpressionNode(context: ConstructContext) {
    /* [Node] BinaryExpression */

    /* [Field] left: Expression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] right: Expression */
    if (context.node.fields['right']) {
      for (const fieldNode of context.node.fields['right']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'right' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanBreakStatementNode(context: ConstructContext) {
    /* [Node] BreakStatement */

    /* [Field] label: StatementIdentifier */
    if (context.node.fields['label']) {
      for (const fieldNode of context.node.fields['label']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'label' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanCallExpressionNode(context: ConstructContext) {
    /* [Node] CallExpression */

    /* [Field] arguments: Arguments */
    if (context.node.fields['arguments']) {
      for (const fieldNode of context.node.fields['arguments']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'arguments' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] arguments: TemplateString */
    if (context.node.fields['arguments']) {
      for (const fieldNode of context.node.fields['arguments']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'arguments' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] function: Expression */
    if (context.node.fields['function']) {
      for (const fieldNode of context.node.fields['function']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'function' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] function: Super */
    if (context.node.fields['function']) {
      for (const fieldNode of context.node.fields['function']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'function' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanCatchClauseNode(context: ConstructContext) {
    /* [Node] CatchClause */

    /* [Field] body: StatementBlock */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] parameter: DestructuringPattern */
    if (context.node.fields['parameter']) {
      for (const fieldNode of context.node.fields['parameter']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'parameter' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] parameter: Identifier */
    if (context.node.fields['parameter']) {
      for (const fieldNode of context.node.fields['parameter']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'parameter' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanClassNode(context: ConstructContext) {
    /* [Node] Class */

    /* [Field] body: ClassBody */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] decorator: Decorator */
    if (context.node.fields['decorator']) {
      for (const fieldNode of context.node.fields['decorator']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'decorator' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] ClassHeritage */
    if (context.node.children['ClassHeritage']) {
      for (const subChildNode of context.node.children['ClassHeritage']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanClassBodyNode(context: ConstructContext) {
    /* [Node] ClassBody */

    /* [Field] member: MethodDefinition */
    if (context.node.fields['member']) {
      for (const fieldNode of context.node.fields['member']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'member' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] member: PublicFieldDefinition */
    if (context.node.fields['member']) {
      for (const fieldNode of context.node.fields['member']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'member' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanClassDeclarationNode(context: ConstructContext) {
    /* [Node] ClassDeclaration */

    /* [Field] body: ClassBody */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] decorator: Decorator */
    if (context.node.fields['decorator']) {
      for (const fieldNode of context.node.fields['decorator']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'decorator' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] ClassHeritage */
    if (context.node.children['ClassHeritage']) {
      for (const subChildNode of context.node.children['ClassHeritage']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanClassHeritageNode(context: ConstructContext) {
    /* [Node] ClassHeritage */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanComputedPropertyNameNode(context: ConstructContext) {
    /* [Node] ComputedPropertyName */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanContinueStatementNode(context: ConstructContext) {
    /* [Node] ContinueStatement */

    /* [Field] label: StatementIdentifier */
    if (context.node.fields['label']) {
      for (const fieldNode of context.node.fields['label']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'label' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanDebuggerStatementNode(context: ConstructContext) {
    /* [Node] DebuggerStatement */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanDecoratorNode(context: ConstructContext) {
    /* [Node] Decorator */

    /* [Child] CallExpression */
    if (context.node.children['CallExpression']) {
      for (const subChildNode of context.node.children['CallExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] Identifier */
    if (context.node.children['Identifier']) {
      for (const subChildNode of context.node.children['Identifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] MemberExpression */
    if (context.node.children['MemberExpression']) {
      for (const subChildNode of context.node.children['MemberExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanDoStatementNode(context: ConstructContext) {
    /* [Node] DoStatement */

    /* [Field] body: Statement */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] condition: ParenthesizedExpression */
    if (context.node.fields['condition']) {
      for (const fieldNode of context.node.fields['condition']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'condition' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanEmptyStatementNode(context: ConstructContext) {
    /* [Node] EmptyStatement */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanExportClauseNode(context: ConstructContext) {
    /* [Node] ExportClause */

    /* [Child] ExportSpecifier */
    if (context.node.children['ExportSpecifier']) {
      for (const subChildNode of context.node.children['ExportSpecifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanExportSpecifierNode(context: ConstructContext) {
    /* [Node] ExportSpecifier */

    /* [Field] alias: Identifier */
    if (context.node.fields['alias']) {
      for (const fieldNode of context.node.fields['alias']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'alias' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanExportStatementNode(context: ConstructContext) {
    /* [Node] ExportStatement */

    /* [Field] declaration: Declaration */
    if (context.node.fields['declaration']) {
      for (const fieldNode of context.node.fields['declaration']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'declaration' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] decorator: Decorator */
    if (context.node.fields['decorator']) {
      for (const fieldNode of context.node.fields['decorator']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'decorator' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] source: String */
    if (context.node.fields['source']) {
      for (const fieldNode of context.node.fields['source']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'source' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] value: Expression */
    if (context.node.fields['value']) {
      for (const fieldNode of context.node.fields['value']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'value' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] ExportClause */
    if (context.node.children['ExportClause']) {
      for (const subChildNode of context.node.children['ExportClause']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanExpressionStatementNode(context: ConstructContext) {
    /* [Node] ExpressionStatement */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SequenceExpression */
    if (context.node.children['SequenceExpression']) {
      for (const subChildNode of context.node.children['SequenceExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanFinallyClauseNode(context: ConstructContext) {
    /* [Node] FinallyClause */

    /* [Field] body: StatementBlock */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanForInStatementNode(context: ConstructContext) {
    /* [Node] ForInStatement */

    /* [Field] body: Statement */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: DestructuringPattern */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: Identifier */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: MemberExpression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: ParenthesizedExpression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] left: SubscriptExpression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] right: Expression */
    if (context.node.fields['right']) {
      for (const fieldNode of context.node.fields['right']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'right' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] right: SequenceExpression */
    if (context.node.fields['right']) {
      for (const fieldNode of context.node.fields['right']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'right' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanForStatementNode(context: ConstructContext) {
    /* [Node] ForStatement */

    /* [Field] body: Statement */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] condition: EmptyStatement */
    if (context.node.fields['condition']) {
      for (const fieldNode of context.node.fields['condition']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'condition' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] condition: ExpressionStatement */
    if (context.node.fields['condition']) {
      for (const fieldNode of context.node.fields['condition']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'condition' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] increment: Expression */
    if (context.node.fields['increment']) {
      for (const fieldNode of context.node.fields['increment']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'increment' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] increment: SequenceExpression */
    if (context.node.fields['increment']) {
      for (const fieldNode of context.node.fields['increment']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'increment' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] initializer: EmptyStatement */
    if (context.node.fields['initializer']) {
      for (const fieldNode of context.node.fields['initializer']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'initializer' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] initializer: ExpressionStatement */
    if (context.node.fields['initializer']) {
      for (const fieldNode of context.node.fields['initializer']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'initializer' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] initializer: LexicalDeclaration */
    if (context.node.fields['initializer']) {
      for (const fieldNode of context.node.fields['initializer']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'initializer' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] initializer: VariableDeclaration */
    if (context.node.fields['initializer']) {
      for (const fieldNode of context.node.fields['initializer']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'initializer' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanFormalParametersNode(context: ConstructContext) {
    /* [Node] FormalParameters */

    /* [Child] DestructuringPattern */
    if (context.node.children['DestructuringPattern']) {
      for (const subChildNode of context.node.children[
        'DestructuringPattern'
      ]) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] AssignmentPattern */
    if (context.node.children['AssignmentPattern']) {
      for (const subChildNode of context.node.children['AssignmentPattern']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] Identifier */
    if (context.node.children['Identifier']) {
      for (const subChildNode of context.node.children['Identifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] RestParameter */
    if (context.node.children['RestParameter']) {
      for (const subChildNode of context.node.children['RestParameter']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanFunctionNode(context: ConstructContext) {
    /* [Node] Function */

    /* [Field] body: StatementBlock */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] parameters: FormalParameters */
    if (context.node.fields['parameters']) {
      for (const fieldNode of context.node.fields['parameters']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'parameters' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanFunctionDeclarationNode(context: ConstructContext) {
    /* [Node] FunctionDeclaration */

    /* [Field] body: StatementBlock */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] parameters: FormalParameters */
    if (context.node.fields['parameters']) {
      for (const fieldNode of context.node.fields['parameters']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'parameters' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanGeneratorFunctionNode(context: ConstructContext) {
    /* [Node] GeneratorFunction */

    /* [Field] body: StatementBlock */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] parameters: FormalParameters */
    if (context.node.fields['parameters']) {
      for (const fieldNode of context.node.fields['parameters']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'parameters' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanGeneratorFunctionDeclarationNode(context: ConstructContext) {
    /* [Node] GeneratorFunctionDeclaration */

    /* [Field] body: StatementBlock */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] parameters: FormalParameters */
    if (context.node.fields['parameters']) {
      for (const fieldNode of context.node.fields['parameters']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'parameters' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanIfStatementNode(context: ConstructContext) {
    /* [Node] IfStatement */

    /* [Field] alternative: Statement */
    if (context.node.fields['alternative']) {
      for (const fieldNode of context.node.fields['alternative']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'alternative' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] condition: ParenthesizedExpression */
    if (context.node.fields['condition']) {
      for (const fieldNode of context.node.fields['condition']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'condition' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] consequence: Statement */
    if (context.node.fields['consequence']) {
      for (const fieldNode of context.node.fields['consequence']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'consequence' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanImportNode(context: ConstructContext) {
    /* [Node] Import */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanImportClauseNode(context: ConstructContext) {
    /* [Node] ImportClause */

    /* [Child] Identifier */
    if (context.node.children['Identifier']) {
      for (const subChildNode of context.node.children['Identifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] NamedImports */
    if (context.node.children['NamedImports']) {
      for (const subChildNode of context.node.children['NamedImports']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] NamespaceImport */
    if (context.node.children['NamespaceImport']) {
      for (const subChildNode of context.node.children['NamespaceImport']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanImportSpecifierNode(context: ConstructContext) {
    /* [Node] ImportSpecifier */

    /* [Field] alias: Identifier */
    if (context.node.fields['alias']) {
      for (const fieldNode of context.node.fields['alias']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'alias' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanImportStatementNode(context: ConstructContext) {
    /* [Node] ImportStatement */

    /* [Field] source: String */
    if (context.node.fields['source']) {
      for (const fieldNode of context.node.fields['source']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'source' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] ImportClause */
    if (context.node.children['ImportClause']) {
      for (const subChildNode of context.node.children['ImportClause']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanJsxAttributeNode(context: ConstructContext) {
    /* [Node] JsxAttribute */

    /* [Child] JsxElement */
    if (context.node.children['JsxElement']) {
      for (const subChildNode of context.node.children['JsxElement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxExpression */
    if (context.node.children['JsxExpression']) {
      for (const subChildNode of context.node.children['JsxExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxFragment */
    if (context.node.children['JsxFragment']) {
      for (const subChildNode of context.node.children['JsxFragment']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxNamespaceName */
    if (context.node.children['JsxNamespaceName']) {
      for (const subChildNode of context.node.children['JsxNamespaceName']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxSelfClosingElement */
    if (context.node.children['JsxSelfClosingElement']) {
      for (const subChildNode of context.node.children[
        'JsxSelfClosingElement'
      ]) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] PropertyIdentifier */
    if (context.node.children['PropertyIdentifier']) {
      for (const subChildNode of context.node.children['PropertyIdentifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] String */
    if (context.node.children['String']) {
      for (const subChildNode of context.node.children['String']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanJsxClosingElementNode(context: ConstructContext) {
    /* [Node] JsxClosingElement */

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: JsxNamespaceName */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: NestedIdentifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanJsxElementNode(context: ConstructContext) {
    /* [Node] JsxElement */

    /* [Field] closeTag: JsxClosingElement */
    if (context.node.fields['closeTag']) {
      for (const fieldNode of context.node.fields['closeTag']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'closeTag' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] openTag: JsxOpeningElement */
    if (context.node.fields['openTag']) {
      for (const fieldNode of context.node.fields['openTag']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'openTag' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxElement */
    if (context.node.children['JsxElement']) {
      for (const subChildNode of context.node.children['JsxElement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxExpression */
    if (context.node.children['JsxExpression']) {
      for (const subChildNode of context.node.children['JsxExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxSelfClosingElement */
    if (context.node.children['JsxSelfClosingElement']) {
      for (const subChildNode of context.node.children[
        'JsxSelfClosingElement'
      ]) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxText */
    if (context.node.children['JsxText']) {
      for (const subChildNode of context.node.children['JsxText']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanJsxExpressionNode(context: ConstructContext) {
    /* [Node] JsxExpression */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SequenceExpression */
    if (context.node.children['SequenceExpression']) {
      for (const subChildNode of context.node.children['SequenceExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SpreadElement */
    if (context.node.children['SpreadElement']) {
      for (const subChildNode of context.node.children['SpreadElement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanJsxFragmentNode(context: ConstructContext) {
    /* [Node] JsxFragment */

    /* [Child] JsxElement */
    if (context.node.children['JsxElement']) {
      for (const subChildNode of context.node.children['JsxElement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxExpression */
    if (context.node.children['JsxExpression']) {
      for (const subChildNode of context.node.children['JsxExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxSelfClosingElement */
    if (context.node.children['JsxSelfClosingElement']) {
      for (const subChildNode of context.node.children[
        'JsxSelfClosingElement'
      ]) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] JsxText */
    if (context.node.children['JsxText']) {
      for (const subChildNode of context.node.children['JsxText']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanJsxNamespaceNameNode(context: ConstructContext) {
    /* [Node] JsxNamespaceName */

    /* [Child] Identifier */
    if (context.node.children['Identifier']) {
      for (const subChildNode of context.node.children['Identifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanJsxOpeningElementNode(context: ConstructContext) {
    /* [Node] JsxOpeningElement */

    /* [Field] attribute: JsxAttribute */
    if (context.node.fields['attribute']) {
      for (const fieldNode of context.node.fields['attribute']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'attribute' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] attribute: JsxExpression */
    if (context.node.fields['attribute']) {
      for (const fieldNode of context.node.fields['attribute']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'attribute' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: JsxNamespaceName */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: NestedIdentifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanJsxSelfClosingElementNode(context: ConstructContext) {
    /* [Node] JsxSelfClosingElement */

    /* [Field] attribute: JsxAttribute */
    if (context.node.fields['attribute']) {
      for (const fieldNode of context.node.fields['attribute']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'attribute' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] attribute: JsxExpression */
    if (context.node.fields['attribute']) {
      for (const fieldNode of context.node.fields['attribute']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'attribute' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: JsxNamespaceName */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: NestedIdentifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanLabeledStatementNode(context: ConstructContext) {
    /* [Node] LabeledStatement */

    /* [Field] label: StatementIdentifier */
    if (context.node.fields['label']) {
      for (const fieldNode of context.node.fields['label']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'label' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] Statement */
    if (context.node.children['Statement']) {
      for (const subChildNode of context.node.children['Statement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanLexicalDeclarationNode(context: ConstructContext) {
    /* [Node] LexicalDeclaration */

    /* [Child] VariableDeclarator */
    if (context.node.children['VariableDeclarator']) {
      for (const subChildNode of context.node.children['VariableDeclarator']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanMemberExpressionNode(context: ConstructContext) {
    /* [Node] MemberExpression */

    /* [Field] object: Expression */
    if (context.node.fields['object']) {
      for (const fieldNode of context.node.fields['object']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'object' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] object: Super */
    if (context.node.fields['object']) {
      for (const fieldNode of context.node.fields['object']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'object' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] property: PropertyIdentifier */
    if (context.node.fields['property']) {
      for (const fieldNode of context.node.fields['property']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'property' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanMetaPropertyNode(context: ConstructContext) {
    /* [Node] MetaProperty */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanMethodDefinitionNode(context: ConstructContext) {
    /* [Node] MethodDefinition */

    /* [Field] body: StatementBlock */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] decorator: Decorator */
    if (context.node.fields['decorator']) {
      for (const fieldNode of context.node.fields['decorator']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'decorator' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: ComputedPropertyName */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Number */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: PropertyIdentifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: String */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] parameters: FormalParameters */
    if (context.node.fields['parameters']) {
      for (const fieldNode of context.node.fields['parameters']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'parameters' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanNamedImportsNode(context: ConstructContext) {
    /* [Node] NamedImports */

    /* [Child] ImportSpecifier */
    if (context.node.children['ImportSpecifier']) {
      for (const subChildNode of context.node.children['ImportSpecifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanNamespaceImportNode(context: ConstructContext) {
    /* [Node] NamespaceImport */

    /* [Child] Identifier */
    if (context.node.children['Identifier']) {
      for (const subChildNode of context.node.children['Identifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanNestedIdentifierNode(context: ConstructContext) {
    /* [Node] NestedIdentifier */

    /* [Child] Identifier */
    if (context.node.children['Identifier']) {
      for (const subChildNode of context.node.children['Identifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] NestedIdentifier */
    if (context.node.children['NestedIdentifier']) {
      for (const subChildNode of context.node.children['NestedIdentifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanNewExpressionNode(context: ConstructContext) {
    /* [Node] NewExpression */

    /* [Field] arguments: Arguments */
    if (context.node.fields['arguments']) {
      for (const fieldNode of context.node.fields['arguments']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'arguments' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: Array */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: ArrowFunction */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: Class */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: False */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: Function */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: GeneratorFunction */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: Identifier */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: Import */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: MemberExpression */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: MetaProperty */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: NewExpression */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: Null */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: Number */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: Object */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: ParenthesizedExpression */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: Regex */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: String */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: SubscriptExpression */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: TemplateString */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: This */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: True */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] constructor: Undefined */
    if (context.node.fields['constructor']) {
      for (const fieldNode of context.node.fields['constructor']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'constructor' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanObjectNode(context: ConstructContext) {
    /* [Node] Object */

    /* [Child] AssignmentPattern */
    if (context.node.children['AssignmentPattern']) {
      for (const subChildNode of context.node.children['AssignmentPattern']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] MethodDefinition */
    if (context.node.children['MethodDefinition']) {
      for (const subChildNode of context.node.children['MethodDefinition']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] Pair */
    if (context.node.children['Pair']) {
      for (const subChildNode of context.node.children['Pair']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] ShorthandPropertyIdentifier */
    if (context.node.children['ShorthandPropertyIdentifier']) {
      for (const subChildNode of context.node.children[
        'ShorthandPropertyIdentifier'
      ]) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SpreadElement */
    if (context.node.children['SpreadElement']) {
      for (const subChildNode of context.node.children['SpreadElement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanObjectPatternNode(context: ConstructContext) {
    /* [Node] ObjectPattern */

    /* [Child] AssignmentPattern */
    if (context.node.children['AssignmentPattern']) {
      for (const subChildNode of context.node.children['AssignmentPattern']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] MethodDefinition */
    if (context.node.children['MethodDefinition']) {
      for (const subChildNode of context.node.children['MethodDefinition']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] Pair */
    if (context.node.children['Pair']) {
      for (const subChildNode of context.node.children['Pair']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] ShorthandPropertyIdentifier */
    if (context.node.children['ShorthandPropertyIdentifier']) {
      for (const subChildNode of context.node.children[
        'ShorthandPropertyIdentifier'
      ]) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SpreadElement */
    if (context.node.children['SpreadElement']) {
      for (const subChildNode of context.node.children['SpreadElement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanPairNode(context: ConstructContext) {
    /* [Node] Pair */

    /* [Field] key: ComputedPropertyName */
    if (context.node.fields['key']) {
      for (const fieldNode of context.node.fields['key']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'key' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] key: Number */
    if (context.node.fields['key']) {
      for (const fieldNode of context.node.fields['key']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'key' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] key: PropertyIdentifier */
    if (context.node.fields['key']) {
      for (const fieldNode of context.node.fields['key']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'key' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] key: String */
    if (context.node.fields['key']) {
      for (const fieldNode of context.node.fields['key']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'key' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] value: Expression */
    if (context.node.fields['value']) {
      for (const fieldNode of context.node.fields['value']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'value' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanParenthesizedExpressionNode(context: ConstructContext) {
    /* [Node] ParenthesizedExpression */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SequenceExpression */
    if (context.node.children['SequenceExpression']) {
      for (const subChildNode of context.node.children['SequenceExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanProgramNode(context: ConstructContext) {
    /* [Node] Program */

    /* [Child] Statement */
    if (context.node.children['Statement']) {
      for (const subChildNode of context.node.children['Statement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] HashBangLine */
    if (context.node.children['HashBangLine']) {
      for (const subChildNode of context.node.children['HashBangLine']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanPublicFieldDefinitionNode(context: ConstructContext) {
    /* [Node] PublicFieldDefinition */

    /* [Field] property: ComputedPropertyName */
    if (context.node.fields['property']) {
      for (const fieldNode of context.node.fields['property']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'property' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] property: Number */
    if (context.node.fields['property']) {
      for (const fieldNode of context.node.fields['property']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'property' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] property: PropertyIdentifier */
    if (context.node.fields['property']) {
      for (const fieldNode of context.node.fields['property']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'property' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] property: String */
    if (context.node.fields['property']) {
      for (const fieldNode of context.node.fields['property']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'property' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] value: Expression */
    if (context.node.fields['value']) {
      for (const fieldNode of context.node.fields['value']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'value' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanRegexNode(context: ConstructContext) {
    /* [Node] Regex */

    /* [Field] flags: RegexFlags */
    if (context.node.fields['flags']) {
      for (const fieldNode of context.node.fields['flags']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'flags' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] pattern: RegexPattern */
    if (context.node.fields['pattern']) {
      for (const fieldNode of context.node.fields['pattern']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'pattern' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanRestParameterNode(context: ConstructContext) {
    /* [Node] RestParameter */

    /* [Child] DestructuringPattern */
    if (context.node.children['DestructuringPattern']) {
      for (const subChildNode of context.node.children[
        'DestructuringPattern'
      ]) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] Identifier */
    if (context.node.children['Identifier']) {
      for (const subChildNode of context.node.children['Identifier']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanReturnStatementNode(context: ConstructContext) {
    /* [Node] ReturnStatement */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SequenceExpression */
    if (context.node.children['SequenceExpression']) {
      for (const subChildNode of context.node.children['SequenceExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanSequenceExpressionNode(context: ConstructContext) {
    /* [Node] SequenceExpression */

    /* [Field] left: Expression */
    if (context.node.fields['left']) {
      for (const fieldNode of context.node.fields['left']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'left' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] right: Expression */
    if (context.node.fields['right']) {
      for (const fieldNode of context.node.fields['right']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'right' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] right: SequenceExpression */
    if (context.node.fields['right']) {
      for (const fieldNode of context.node.fields['right']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'right' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanSpreadElementNode(context: ConstructContext) {
    /* [Node] SpreadElement */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanStatementBlockNode(context: ConstructContext) {
    /* [Node] StatementBlock */

    /* [Child] Statement */
    if (context.node.children['Statement']) {
      for (const subChildNode of context.node.children['Statement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanStringNode(context: ConstructContext) {
    /* [Node] String */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanSubscriptExpressionNode(context: ConstructContext) {
    /* [Node] SubscriptExpression */

    /* [Field] index: Expression */
    if (context.node.fields['index']) {
      for (const fieldNode of context.node.fields['index']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'index' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] index: SequenceExpression */
    if (context.node.fields['index']) {
      for (const fieldNode of context.node.fields['index']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'index' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] object: Expression */
    if (context.node.fields['object']) {
      for (const fieldNode of context.node.fields['object']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'object' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] object: Super */
    if (context.node.fields['object']) {
      for (const fieldNode of context.node.fields['object']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'object' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanSwitchBodyNode(context: ConstructContext) {
    /* [Node] SwitchBody */

    /* [Child] SwitchCase */
    if (context.node.children['SwitchCase']) {
      for (const subChildNode of context.node.children['SwitchCase']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SwitchDefault */
    if (context.node.children['SwitchDefault']) {
      for (const subChildNode of context.node.children['SwitchDefault']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanSwitchCaseNode(context: ConstructContext) {
    /* [Node] SwitchCase */

    /* [Field] value: Expression */
    if (context.node.fields['value']) {
      for (const fieldNode of context.node.fields['value']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'value' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] value: SequenceExpression */
    if (context.node.fields['value']) {
      for (const fieldNode of context.node.fields['value']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'value' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] Statement */
    if (context.node.children['Statement']) {
      for (const subChildNode of context.node.children['Statement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanSwitchDefaultNode(context: ConstructContext) {
    /* [Node] SwitchDefault */

    /* [Child] Statement */
    if (context.node.children['Statement']) {
      for (const subChildNode of context.node.children['Statement']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanSwitchStatementNode(context: ConstructContext) {
    /* [Node] SwitchStatement */

    /* [Field] body: SwitchBody */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] value: ParenthesizedExpression */
    if (context.node.fields['value']) {
      for (const fieldNode of context.node.fields['value']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'value' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanTemplateStringNode(context: ConstructContext) {
    /* [Node] TemplateString */

    /* [Child] EscapeSequence */
    if (context.node.children['EscapeSequence']) {
      for (const subChildNode of context.node.children['EscapeSequence']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] TemplateSubstitution */
    if (context.node.children['TemplateSubstitution']) {
      for (const subChildNode of context.node.children[
        'TemplateSubstitution'
      ]) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanTemplateSubstitutionNode(context: ConstructContext) {
    /* [Node] TemplateSubstitution */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SequenceExpression */
    if (context.node.children['SequenceExpression']) {
      for (const subChildNode of context.node.children['SequenceExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanTernaryExpressionNode(context: ConstructContext) {
    /* [Node] TernaryExpression */

    /* [Field] alternative: Expression */
    if (context.node.fields['alternative']) {
      for (const fieldNode of context.node.fields['alternative']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'alternative' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] condition: Expression */
    if (context.node.fields['condition']) {
      for (const fieldNode of context.node.fields['condition']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'condition' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] consequence: Expression */
    if (context.node.fields['consequence']) {
      for (const fieldNode of context.node.fields['consequence']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'consequence' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanThrowStatementNode(context: ConstructContext) {
    /* [Node] ThrowStatement */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Child] SequenceExpression */
    if (context.node.children['SequenceExpression']) {
      for (const subChildNode of context.node.children['SequenceExpression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanTryStatementNode(context: ConstructContext) {
    /* [Node] TryStatement */

    /* [Field] body: StatementBlock */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] finalizer: FinallyClause */
    if (context.node.fields['finalizer']) {
      for (const fieldNode of context.node.fields['finalizer']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'finalizer' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] handler: CatchClause */
    if (context.node.fields['handler']) {
      for (const fieldNode of context.node.fields['handler']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'handler' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanUnaryExpressionNode(context: ConstructContext) {
    /* [Node] UnaryExpression */

    /* [Field] argument: Expression */
    if (context.node.fields['argument']) {
      for (const fieldNode of context.node.fields['argument']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'argument' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanUpdateExpressionNode(context: ConstructContext) {
    /* [Node] UpdateExpression */

    /* [Field] argument: Expression */
    if (context.node.fields['argument']) {
      for (const fieldNode of context.node.fields['argument']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'argument' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanVariableDeclarationNode(context: ConstructContext) {
    /* [Node] VariableDeclaration */

    /* [Child] VariableDeclarator */
    if (context.node.children['VariableDeclarator']) {
      for (const subChildNode of context.node.children['VariableDeclarator']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanVariableDeclaratorNode(context: ConstructContext) {
    /* [Node] VariableDeclarator */

    /* [Field] name: DestructuringPattern */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] name: Identifier */
    if (context.node.fields['name']) {
      for (const fieldNode of context.node.fields['name']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'name' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] value: Expression */
    if (context.node.fields['value']) {
      for (const fieldNode of context.node.fields['value']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'value' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanWhileStatementNode(context: ConstructContext) {
    /* [Node] WhileStatement */

    /* [Field] body: Statement */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] condition: ParenthesizedExpression */
    if (context.node.fields['condition']) {
      for (const fieldNode of context.node.fields['condition']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'condition' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanWithStatementNode(context: ConstructContext) {
    /* [Node] WithStatement */

    /* [Field] body: Statement */
    if (context.node.fields['body']) {
      for (const fieldNode of context.node.fields['body']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'body' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }

    /* [Field] object: ParenthesizedExpression */
    if (context.node.fields['object']) {
      for (const fieldNode of context.node.fields['object']) {
        context.node = fieldNode

        const specificFieldNodeTypeName = fieldNode.type
        context.path.push(
          fieldNode.fieldName ? 'object' : specificFieldNodeTypeName
        )

        // Get the field's value
        // @ts-ignore
        this[`scan${specificFieldNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanYieldExpressionNode(context: ConstructContext) {
    /* [Node] YieldExpression */

    /* [Child] Expression */
    if (context.node.children['Expression']) {
      for (const subChildNode of context.node.children['Expression']) {
        context.node = subChildNode

        const specificSubchildNodeTypeName = subChildNode.type
        context.path.push(specificSubchildNodeTypeName)

        // Get the field's value
        // @ts-ignore
        this[`scan${specificSubchildNodeTypeName}Node`](context)

        // Go back to parent
        context.node = context.node.parent
        context.path.pop()
      }
    }
  }

  scanEscapeSequenceNode(context: ConstructContext) {
    /* [Node] EscapeSequence */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanFalseNode(context: ConstructContext) {
    /* [Node] False */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanHashBangLineNode(context: ConstructContext) {
    /* [Node] HashBangLine */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanIdentifierNode(context: ConstructContext) {
    /* [Node] Identifier */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanJsxTextNode(context: ConstructContext) {
    /* [Node] JsxText */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanNullNode(context: ConstructContext) {
    /* [Node] Null */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanNumberNode(context: ConstructContext) {
    /* [Node] Number */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanPropertyIdentifierNode(context: ConstructContext) {
    /* [Node] PropertyIdentifier */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanRegexFlagsNode(context: ConstructContext) {
    /* [Node] RegexFlags */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanRegexPatternNode(context: ConstructContext) {
    /* [Node] RegexPattern */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanShorthandPropertyIdentifierNode(context: ConstructContext) {
    /* [Node] ShorthandPropertyIdentifier */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanStatementIdentifierNode(context: ConstructContext) {
    /* [Node] StatementIdentifier */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanSuperNode(context: ConstructContext) {
    /* [Node] Super */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanThisNode(context: ConstructContext) {
    /* [Node] This */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanTrueNode(context: ConstructContext) {
    /* [Node] True */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }

  scanUndefinedNode(context: ConstructContext) {
    /* [Node] Undefined */

    const pathVarName = context.path.join('.')
    context.vars[pathVarName] ||= []
    context.vars[pathVarName].push(context.node.text)
  }
}
