import fs from 'fs'
import { ProgramScannerGenerator } from '../../src/ProgramScannerGenerator'
import path from 'path'

const JavaScriptLanguageDefinition = require(path.resolve(
  './src/assets/javascript-lang-node-types.json'
))

const generator = new ProgramScannerGenerator(JavaScriptLanguageDefinition)
const generatedScannerClassCode = generator.generate(
  JavaScriptLanguageDefinition.filter(
    (x: { named: any; subtypes: any }) => x.named && !x.subtypes
  ).map((x: { type: any }) => x.type)
)
fs.writeFileSync('src/ProgramScanner.ts', generatedScannerClassCode)
