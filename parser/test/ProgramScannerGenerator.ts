import baretest from 'baretest'
import assert from 'assert'
import JavaScriptLanguageDefinition from '../src/assets/javascript-lang-node-types.json'
import { TreeSitterParser } from '../src/TreeSitterParser'
import {
  prettierFormatOpts,
  ProgramScannerGenerator
} from '../src/ProgramScannerGenerator'
import { TreeSitterLanguageNode } from '../src/TreeSitterLanguage'
import { Program } from '../src/Program'
import prettier from 'prettier'
import fs from 'fs'

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

const program3 = `
import defaultMember from "module-name";
import * as name from "module-name";
import { member } from "module-name";
import { member1 , member2 } from "module-name";
import { member1 , member2 as alias2 } from "module-name";
import defaultMember, { member1, member2 as alias2 } from "module-name";
import defaultMember, * as name from "module-name";
import "module-name";
import { member1 , member2 as alias2, } from "module-name";
import("a");
import("a").then((m) => {});
import.meta.url;
`

function getCodeTemplate(body?: string) {
  return prettier.format(
    `const vars = {}\n${typeof body !== 'undefined' ? `${body}\n` : ''}`,
    prettierFormatOpts
  )
}

test.skip(`named nodes without fields or children should be treated as string literals`, () => {
  const generator = new ProgramScannerGenerator(JavaScriptLanguageDefinition)
  const result = generator.generate('identifier')
  assert.strictEqual(result, getCodeTemplate(`// Node: Identifier`))
})

test.skip(`node with children only`, () => {
  const generator = new ProgramScannerGenerator(JavaScriptLanguageDefinition)
  const result = generator.generate('program')
  assert.strictEqual(result, getCodeTemplate(`// Node: Program`))
})

test.skip(`node with fields and children`, () => {
  const generator = new ProgramScannerGenerator(JavaScriptLanguageDefinition)
  const result = generator.generate('import_statement')
  assert.strictEqual(result, getCodeTemplate(`// Node: Program`))
})

test(`node with fields only`, () => {
  const generator = new ProgramScannerGenerator(JavaScriptLanguageDefinition)
  const generatedScannerClassCode = generator.generate([
    'string',
    'import_statement'
  ])
  fs.writeFileSync('src/ProgramScanner.ts', generatedScannerClassCode)
})

test.run()
