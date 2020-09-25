export type JsonPrimitive = string | number | boolean | null
export interface JsonObject {
  [member: string]: JsonValue
}
export interface JsonArray extends Array<JsonValue> {}

export type JsonValue = JsonPrimitive | JsonObject | JsonArray

export interface DefinitionChild {
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

export interface DefinitionFields {
  [member: string]: DefinitionChild
}

export interface DefinitionSupertypeChild {
  type: string
  named: boolean
}

export interface DefinitionEntry {
  type: string
  named: boolean
  fields?: DefinitionFields
  children?: DefinitionChild
  subtypes?: Array<DefinitionSupertypeChild>
}

export interface LanguageDefinition extends Array<DefinitionEntry> {}

export enum LanguageNodeKind {
  Regular,
  Supertype
}
