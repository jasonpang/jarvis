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
import { ProgramScanner } from '../src/ProgramScanner'
import { inspect } from 'util'

const inspectOpts = {
  colors: true,
  compact: 0,
  depth: 10,
  getters: true,
  maxArrayLength: 30,
  maxStringLength: 100,
  showHidden: false,
  showProxy: true,
  sorted: true
}

const test = baretest('scanner')

test.skip(`imports`, () => {
  const program = new Program(`
  import defaultMember from "module-name";
  import * as name from "module-name";
  import { member } from "module-name";
  import { member1 , member2 } from "module-name";
  import { member1 , member2 as alias2 } from "module-name";
  import defaultMember, { member1, member2 as alias2 } from "module-name";
  import defaultMember, * as name from "module-name";
  import "module-name";
  import { member1 , member2 as alias2, } from "module-name";
  `)
  console.log(inspect(program.imports, inspectOpts))
})

test.skip(`exports`, () => {
  const program = new Program(`export { name1, name2, name3, nameN };
  export { variable1 as name1, variable2 as name2, nameN };
  export let name1, name2, nameN;
  export let name1 = value1, name2 = value2, name3, nameN;

  export default expression;
  export default function () { }
  export default function name1() { }
  export { name1 as default };

  export * from 'foo';
  export { name1, name2, nameN } from 'foo';
  export { import1 as name1, import2 as name2, nameN } from 'foo';`)
  program.print()
  console.log(inspect(program.imports, inspectOpts))
})

test(`program`, () => {
  const program = new Program(`
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
  `)
  console.log(inspect(program.imports, inspectOpts))
  console.log(inspect(program.exports, inspectOpts))
})

test.run()
