import baretest from 'baretest'
import assert from 'assert'
import { LanguageParserGenerator } from '../src/generator'
import JavaScriptLanguageDefinition from '../src/assets/javascript-lang-node-types.json'
import { TreeSitterParser } from '../src/TreeSitterParser'

const test = baretest('parser playground')

const program1 = `
/* eslint-disable */
import React, { Fragment, useCallback, useState } from 'react'

export default function Component() {
  const [count, setCount] = useState(0)

  const onClick = useCallback(() => {
    setCount(x => x + 1)
  }, [setCount])

  const uncompletedFn = useCallb

  return (
    <Fragment>
      <div>Hello world! I've been clicked {count} times!</div>
      <button onClick={onClick}>Increment Count</button>
    </Fragment>
  )
}
`

const program2 = `throw 1, 'test', new Error('hi') `
test(`playground`, () => {
  // const generator = new LanguageParserGenerator(JavaScriptLanguageDefinition)
  const parser = new TreeSitterParser(JavaScriptLanguageDefinition, program1)
  const result = parser.parse()
  debugger
})

test.run()
