/**
 * Represents a row and column position, such as
 * the position of the cursor.
 */
export interface SourcePosition {
  /**
   * The zero-based row value.
   */
  readonly row: number

  /**
   * The zero-based column value.
   */
  readonly column: number
}

export interface SourceChangeEvent {
  /**
   * The associated uri for this document.
   */
  readonly documentUri: string
  /**
   * The new text for the range.
   */
  readonly deltas: SourceChangeDelta[]
}

export interface SourceChangeDelta {
  /* Tree sitter syntax nodes store their position in the source code both in terms of raw bytes and row/column coordinates. */

  /**
   * The offset of the range that got replaced.
   */
  startIndex: number
  /**
   * The sum of the old text's length and offset of the range that got replaced.
   */
  oldEndIndex: number
  /**
   * The sum of the new text's length and offset of the range that got replaced.
   */
  newEndIndex: number
  /**
   * Converts a zero-based offset to a position.
   */
  startPosition: any
  oldEndPosition: any
  newEndPosition: any
  /**
   * The new text for the range.
   */
  text: string
}
