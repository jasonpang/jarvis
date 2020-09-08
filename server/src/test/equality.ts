import baretest from 'baretest'
import assert from 'assert'
import SyntaxParser from '../SyntaxParser'
import { pp } from '../util/print'

const test = baretest('node equality')

test(`node equality"`, () => {
  const parser = new SyntaxParser(`var a = 1; var b = 3`)

  const tree1 = parser.parse()
  var identifiersA = tree1.rootNode.descendantsOfType('identifier')
  var numbersA = tree1.rootNode.descendantsOfType('number')

  parser.setSource(`var a = 2; var b = 6`)

  const tree2 = parser.parse()
  var identifiersB = tree2.rootNode.descendantsOfType('identifier')
  var numbersB = tree2.rootNode.descendantsOfType('number')

  console.log(identifiersA[0].text, identifiersB[0].text)
  assert.strictEqual(identifiersA[0].text, identifiersB[0].text)
  assert.strictEqual(identifiersA[0][0], identifiersB[0][0])
  console.log(identifiersA[1].text, identifiersB[1].text)
  assert.strictEqual(identifiersA[1].text, identifiersB[1].text)
  assert.strictEqual(identifiersA[1][0], identifiersB[1][0])

  console.log(numbersA[0].text, numbersB[0].text)
  assert.notStrictEqual(numbersA[0].text, numbersB[0].text)
  assert.strictEqual(numbersA[0][0], numbersB[0][0])
  console.log(numbersA[1].text, numbersB[1].text)
  assert.notStrictEqual(numbersA[1].text, numbersB[1].text)
  assert.strictEqual(numbersA[1][0], numbersB[1][0])
})

test.run()
