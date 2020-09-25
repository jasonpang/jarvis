import baretest from 'baretest'
import assert from 'assert'
import SyntaxParser from '../SyntaxParser'
import { pp } from '../util/print'

const test = baretest('node equality')

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

const program2 = `throw 1, 'test', new Error('hi')`
test(`playground"`, () => {
  const parser = new SyntaxParser(program2)

  const tree1 = parser.parse()
  var identifiersA = tree1.rootNode.descendantsOfType('identifier')
  var numbersA = tree1.rootNode.descendantsOfType('number')

  parser.setSource(`var a = 2; var b = 6`)

  const tree2 = parser.parse()
  var identifiersB = tree2.rootNode.descendantsOfType('identifier')
  var numbersB = tree2.rootNode.descendantsOfType('number')
})

test.run()
