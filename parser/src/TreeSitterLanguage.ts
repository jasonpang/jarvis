import startCase from 'lodash.startcase'
import {
  LanguageDefinition,
  LanguageNodeKind,
  DefinitionEntry,
  DefinitionSupertypeChild
} from './types'

export class TreeSitterLanguage {
  public definition: TreeSitterLanguageNode[] = []

  constructor(definition: LanguageDefinition) {
    this.definition = definition
      .map(entry => new TreeSitterLanguageNode(entry))
      .sort((a, b) => {
        // Sort by named vs. unnamed first, and then alphabetically
        if (a.named && !b.named) {
          return -1
        }
        if (b.named && !a.named) {
          return 1
        }

        return a.type.localeCompare(b.type)
      })
  }
}

/**
 * A structured representation of an entry in <language>-node-types.json.
 */
export class TreeSitterLanguageNode {
  public kind: LanguageNodeKind
  public type: string
  public named: boolean
  public fields: Map<string, string[]>
  public children: string[]

  constructor(node: DefinitionEntry) {
    this.kind = node.subtypes
      ? LanguageNodeKind.Supertype
      : LanguageNodeKind.Regular
    this.type = this.getTypeName(node)
    this.named = node.named
    this.fields = this.getNodeFields(node)
    this.children = this.getNodeChildren(node)
  }

  public static getFormattedName(unformattedName: string): string {
    return startCase(unformattedName).replace(/ /g, '')
  }

  public getFormattedName(unformattedName: string): string {
    return startCase(unformattedName).replace(/ /g, '')
  }

  private getTypeName({ type, named }: DefinitionSupertypeChild): string {
    return named ? this.getFormattedName(type) : type
  }

  private getNodeFields(node: DefinitionEntry): Map<string, string[]> {
    const fields: Map<string, string[]> = new Map()

    if (node.fields) {
      for (const [fieldName, subnode] of Object.entries(node.fields)) {
        fields.set(
          fieldName,
          subnode.types.map(x => this.getTypeName(x))
        )
      }
    }

    return fields
  }

  private getNodeChildren(node: DefinitionEntry): string[] {
    return [
      ...(node.subtypes ? node.subtypes.map(x => this.getTypeName(x)) : []),
      ...(Array.isArray(node.children?.types)
        ? node.children!.types.map(x => this.getTypeName(x))
        : [])
    ]
  }
}
