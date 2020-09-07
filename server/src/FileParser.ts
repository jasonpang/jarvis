import Parser, { TreeCursor, SyntaxNode } from 'tree-sitter'
import JavaScript from 'tree-sitter-javascript'
import {
  SyntaxType,
  TypedTreeCursor,
  ClassDeclarationNode,
  NamedNode
} from './tree-sitter-javascript'

let parser: Parser

export default class FileParser {
  static init() {
    parser = new Parser()
    parser.setLanguage(JavaScript)
  }

  static parse(source: string, old?: any) {
    const tree = parser.parse(source, old)

    printDeclaredNames()
    printFunctionNames()

    function printDeclaredNames() {
      let cursor = tree.walk()
      do {
        const c = cursor as TypedTreeCursor
        switch (c.nodeType) {
          case SyntaxType.ClassDeclaration:
          case SyntaxType.FunctionDeclaration:
          case SyntaxType.VariableDeclarator: {
            let node = c.currentNode
            console.log(node.nameNode.text)
            break
          }
        }
      } while (gotoPreorderSucc(cursor))
    }

    function printFunctionNames() {
      let cursor = tree.walk()
      do {
        const c = cursor as TypedTreeCursor
        switch (c.nodeType) {
          case SyntaxType.Function:
          case SyntaxType.FunctionDeclaration: {
            let node = c.currentNode
            if (node.isNamed && node.nameNode != null) {
              console.log(node.nameNode.text)
            }
            break
          }
          case SyntaxType.ClassDeclaration: {
            let node = c.currentNode
            console.log(
              'Class with members: ' + getMemberNames(node).join(', ')
            )
            break
          }
        }
      } while (gotoPreorderSucc(cursor))
    }

    function getMemberNames(node: ClassDeclarationNode) {
      let result = []
      for (let member of node.bodyNode.memberNodes) {
        if (member.type === SyntaxType.MethodDefinition) {
          result.push(member.nameNode.text)
        } else {
          result.push(member.propertyNode.text)
        }
      }
      return result
    }

    function gotoPreorderSucc(cursor: TreeCursor): boolean {
      if (cursor.gotoFirstChild()) return true
      while (!cursor.gotoNextSibling()) {
        if (!cursor.gotoParent()) {
          return false
        }
      }
      return true
    }

    return tree
  }
}
