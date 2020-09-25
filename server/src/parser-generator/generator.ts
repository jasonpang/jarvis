import JavaScriptLanguageDefinition from './javascript-lang-node-types.json'
import startCase from 'lodash.startcase'
import fs from 'fs'
import path from 'path'

type JsonPrimitive = string | number | boolean | null
interface JsonObject {
  [member: string]: JsonValue
}
interface JsonArray extends Array<JsonValue> {}

type JsonValue = JsonPrimitive | JsonObject | JsonArray

interface DefinitionChild {
  /**
   * A boolean indicating whether there is always at least one node in this set.
   */
  required: boolean
  /**
   * A boolean indicating whether there can be multiple nodes in this set.
   */
  multiple: boolean
  /**
   * An array of objects that represent the possible types of nodes in this set. Each object has two keys: "type" and "named".
   */
  types: [
    {
      /**
       *  A string that indicates which grammar rule the node represents.
       */
      type: string
      /**
       * A boolean that indicates whether this kind of node corresponds to a rule name in the grammar or just a string literal.
       */
      named: boolean
    }
  ]
}

interface DefinitionFields {
  [member: string]: DefinitionChild
}

interface DefinitionSupertypeChild {
  type: string
  named: boolean
}

interface DefinitionEntry {
  type: string
  named: boolean
  fields?: DefinitionFields
  children?: DefinitionChild
  subtypes?: Array<DefinitionSupertypeChild>
}

interface LanguageDefinition extends Array<DefinitionEntry> {}

class Language {
  private static def: LanguageDefinition
  private static namedTypes: DefinitionEntry[]
  private static superTypes: DefinitionEntry[]
  private static structToOriginalNamesMap: JsonObject

  static parse(def: LanguageDefinition) {
    this.def = def
    this.structToOriginalNamesMap = {}
    this.namedTypes = this.def.filter(
      x => x.type && x.named === true && typeof x.subtypes === 'undefined'
    )
    this.superTypes = this.def.filter(
      x =>
        x.type &&
        x.named === true &&
        Array.isArray(x.subtypes) &&
        x.subtypes.length
    )
  }

  /**
   * Named types that are not supertypes.
   */
  static get NamedTypes() {
    return this.namedTypes
  }

  /**
   * Entries that are named and have subtypes.
   */
  static get SuperTypes() {
    return this.superTypes
  }

  static getOriginalName(structName: string): string {
    return (
      (Language.structToOriginalNamesMap[structName] as string | undefined) ||
      structName
    )
  }

  static getStructName(rawName: string): string {
    // console.log('Getting transformed name for:', rawName)
    let result = startCase(rawName.replace(/^_/, '*'))
      .replace(/\s+/g, '')
      .replace(/\*/g, '_')
      .trim()
    if (!Language.structToOriginalNamesMap[rawName]) {
      Language.structToOriginalNamesMap[rawName] = result
    }
    return result
  }
}

class Generator {
  private source: string
  private enumTypes: Map<string, Array<string>>

  constructor() {
    this.source = `
    use tree_sitter::{InputEdit, Language, Node, Parser, Point, Query, QueryCursor, TreeCursor};
    `.trimStart()
    this.enumTypes = new Map()
    Language.parse(JavaScriptLanguageDefinition as any)
  }

  generateEnumTypes() {
    for (const [name, subtypes] of this.enumTypes) {
      this.source += `
      pub enum ${name} {
        ${subtypes.join(',\n\t')}
      }
      `

      const source2 = `

      pub struct ${name} {
        ${subtypes
          .map(subtype => `${subtype}: Box<${Language.getStructName(subtype)}>`)
          .join(',\n\t')}
      }

      pub fn parse_${name}(mut cursor: &mut TreeCursor<'_>) -> ${name} {
        let original_node = cursor.node();

        ${subtypes.map(subtype => `let ${subtype};`).join('\n\t')}

        println!("Parsing: {}", cursor.node().kind());

        while let Some(sibling) = cursor.node().next_sibling() {
            if !sibling.is_named() {
                cursor.goto_next_sibling();
                continue;
            }
            println!("\tParsing: {}", sibling.kind());
            match sibling.kind() {
              ${subtypes
                .map(
                  subtype =>
                    `"${subtype}" => { ${subtype} = parse_${subtype}(cursor); }`
                )
                .join(',\n\t')}
                ${subtypes.length ? ',' : ''}
                _ => (),
            };
            cursor.goto_next_sibling();
        }

        cursor.reset(original_node);
        return ${name} {
        ${subtypes
          .map(subtype => `${subtype}: Box::new(${subtype})`)
          .join(',\n\t')}
        };
    }
      `
      this.source += source2
    }
  }

  generateNamedTypeDefinitions() {
    const result = Language.NamedTypes.map(type => {
      const name = Language.getStructName(type.type)
      const membersFromFields: Array<{
        fieldName: string
        fieldValue: string
        originalFieldType: string
      }> = type.fields
        ? Object.entries(type.fields)
            .map(([fieldName, fieldDef]) => {
              const namedSubtypes = fieldDef.types.filter(x => x.named === true)

              if (!namedSubtypes.length) {
                // Has types field array, but none that are named
                return { fieldName: '', fieldValue: '', originalFieldType: '' }
              }

              if (namedSubtypes.length === 1) {
                const result = {
                  fieldName,
                  originalFieldType: namedSubtypes[0].type,
                  fieldValue: Language.getStructName(namedSubtypes[0].type)
                }
                if (fieldDef.multiple) {
                  result.fieldValue = `Vec<${result.fieldValue}>`
                }
                return result
              }

              if (namedSubtypes.length > 1) {
                const multiFieldSubtypeName = `${name}FieldTypes`
                this.enumTypes.set(
                  multiFieldSubtypeName,
                  namedSubtypes.map(x => Language.getStructName(x.type))
                )
                return {
                  fieldName,
                  fieldValue: multiFieldSubtypeName,
                  originalFieldType: type.type
                }
              }

              console.error('Unexpected case:', fieldName, fieldDef)
              return { fieldName: '', fieldValue: '', originalFieldType: '' }
            })
            .filter(x => x.fieldName.length && x.fieldValue.length)
        : []
      const membersFromChildren =
        type.children &&
        Array.isArray(type.children.types) &&
        type.children.types.length
          ? type.children.types
              .filter(({ type: fieldName, named }) => named)
              .map(x => ({
                fieldName: x.type,
                fieldValue: Language.getStructName(x.type),
                originalFieldType: x.type
              }))
          : []
      const members = [membersFromFields, membersFromChildren].flat()
      return `
      pub struct ${name} {
        ${members
          .map(
            ({ fieldName, fieldValue }) => `${fieldName}: Box<${fieldValue}>`
          )
          .join(',\n\t')}
      }

      pub fn parse_${type.type}(mut cursor: &mut TreeCursor<'_>) -> ${name} {
        let original_node = cursor.node();

        ${members
          .map(({ fieldName, fieldValue }) => `let ${fieldName};`)
          .join('\n\t')}

        println!("Parsing: {}", cursor.node().kind());

        while let Some(sibling) = cursor.node().next_sibling() {
            if !sibling.is_named() {
                cursor.goto_next_sibling();
                continue;
            }
            println!("\tParsing: {}", sibling.kind());
            match sibling.kind() {
              ${members
                .map(
                  ({ fieldName, fieldValue, originalFieldType }) =>
                    `"${fieldName}" => { ${fieldName} = parse_${originalFieldType}(cursor); }`
                )
                .join(',\n\t')}
                ${members.length ? ',' : ''}
                _ => (),
            };
            cursor.goto_next_sibling();
        }

        cursor.reset(original_node);
        return ${name} {
        ${members
          .map(
            ({ fieldName, fieldValue }) =>
              `${fieldName}: Box::new(${fieldName})`
          )
          .join(',\n\t')}
        };
    }
      `
    }).join('\n')
    this.source += result
  }

  generateSuperTypeDefinitions() {
    const result = Language.SuperTypes.map(type => {
      const superTypeName = type.type
      console.log('Super Type Name:', superTypeName)
      const transformedSuperTypeName = Language.getStructName(type.type)
      const namedSubtypes = type.subtypes!.filter(x => x.named === true)

      return `
      pub struct ${transformedSuperTypeName} {
        ${namedSubtypes
          .map(
            subtype =>
              `${subtype.type}: Box<${Language.getStructName(subtype.type)}>`
          )
          .join(',\n\t')}
      }

      pub fn parse_${
        type.type
      }(mut cursor: &mut TreeCursor<'_>) -> ${transformedSuperTypeName} {
        let original_node = cursor.node();

        ${namedSubtypes.map(subtype => `let ${subtype.type};`).join('\n\t')}

        println!("Parsing: {}", cursor.node().kind());

        while let Some(sibling) = cursor.node().next_sibling() {
            if !sibling.is_named() {
                cursor.goto_next_sibling();
                continue;
            }
            println!("\tParsing: {}", sibling.kind());
            match sibling.kind() {
              ${namedSubtypes
                .map(
                  subtype =>
                    `"${subtype.type}" => { ${subtype.type} = parse_${subtype.type}(cursor); }`
                )
                .join(',\n\t')}
                ${namedSubtypes.length ? ',' : ''}
                _ => (),
            };
            cursor.goto_next_sibling();
        }

        cursor.reset(original_node);
        return ${transformedSuperTypeName} {
        ${namedSubtypes
          .map(subtype => `${subtype.type}: Box::new(${subtype.type})`)
          .join(',\n\t')}
        };
    }
      `
    }).join('\n')
    this.source += result
  }

  run() {
    // console.log('Rust JavaScript Types Generator')
    // console.log('-------------------------------')
    // console.log(
    //   `This script uses the Tree Sitter JavaScript node types JSON to generate Rust type definitions for use in a Rust program.`
    // )
    // console.log()

    // console.log('Number of Named Non-Super Types:', Language.NamedTypes.length)
    // console.log(
    //   'Named Super Types:',
    //   Language.SuperTypes.map(x => ({
    //     [x.type]: x.subtypes!.filter(x => x.named === true).map(x => x.type)
    //   }))
    // )

    this.generateNamedTypeDefinitions()
    this.generateEnumTypes()
    this.generateSuperTypeDefinitions()

    this.source = this.source.replace(/^(\s+)(false|true)(,)/gm, '$1_$2$3')
    this.source = this.source.replace(/(\s+)(false|true)(\s+=)/gm, '$1_$2$3')
    this.source = this.source.replace(/(\s+)(false|true)(;)/gm, '$1_$2$3')
    this.source = this.source.replace(/^(\s+)(false|true)(:)/gm, '$1_$2$3')
    this.source = this.source.replace(
      /Box::new\((false|true)\)/gm,
      'Box::new(_$1)'
    )

    fs.writeFileSync('../server/src/parser/test.rs', this.source)
    console.log('Done.')
  }
}

new Generator().run()
