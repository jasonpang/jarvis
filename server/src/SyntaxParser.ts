import TreeSitterParser, { TreeCursor, SyntaxNode } from 'tree-sitter'
import JavaScriptLanguage from 'tree-sitter-javascript'
import {
  SyntaxType,
  TypedTreeCursor,
  ClassDeclarationNode,
  NamedNode
} from './tree-sitter-javascript'

export default class SyntaxParser {
  private parser: TreeSitterParser
  private source: string
  private prevTree?: TreeSitterParser.Tree
  private tree?: TreeSitterParser.Tree

  constructor(initialSource: string) {
    this.source = initialSource

    this.parser = new TreeSitterParser()
    this.parser.setLanguage(JavaScriptLanguage)
  }

  updateSource(changedRanges: any) {}

  setSource(source: string) {
    this.source = source
  }

  parse() {
    this.tree = this.parser.parse(this.source, this.prevTree)
    this.prevTree = this.tree
    return this.tree!
  }

  printDeclaredNames() {
    if (!this.tree) {
      return
    }

    let cursor = this.tree.walk()
    do {
      const c = (cursor as unknown) as TypedTreeCursor
      switch (c.nodeType) {
        case SyntaxType.ClassDeclaration:
        case SyntaxType.FunctionDeclaration:
        case SyntaxType.VariableDeclarator: {
          let node = c.currentNode
          console.log(node.nameNode.text)
          break
        }
      }
    } while (this.gotoPreorderSucc(cursor))
  }

  printFunctionNames() {
    if (!this.tree) {
      return
    }
    let cursor = this.tree.walk()
    do {
      const c = (cursor as unknown) as TypedTreeCursor
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
            'Class with members: ' + this.getMemberNames(node).join(', ')
          )
          break
        }
      }
    } while (this.gotoPreorderSucc(cursor))
  }

  getMemberNames(node: ClassDeclarationNode) {
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

  gotoPreorderSucc(cursor: TreeCursor): boolean {
    if (cursor.gotoFirstChild()) return true
    while (!cursor.gotoNextSibling()) {
      if (!cursor.gotoParent()) {
        return false
      }
    }
    return true
  }
}
