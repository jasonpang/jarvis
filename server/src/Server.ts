import { SourceChangeEvent } from '@jarvis/common'
import { Program } from '@jarvis/parser'
import { Application, net } from '@metarhia/jstp'
import fs from 'fs'
import os from 'os'
import path from 'path'
import { inspect } from 'util'
import { TextDocument } from 'vscode'
import { Context } from './types'

const trees: { [uri: string]: Program } = {}

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

export default class Server {
  private jobs: SourceChangeEvent[] = []
  private isRunningJob: boolean = false

  constructor(private context: Context) {
    this.context = context
    this.jobs = []
  }

  async onDidChangeTextDocument({
    deltas,
    documentUri,
    fullTextForFirstEventOnly
  }: SourceChangeEvent) {
    let program = trees[documentUri]

    if (!program && typeof fullTextForFirstEventOnly !== 'string') {
      return
    }

    if (fullTextForFirstEventOnly !== null) {
      console.log(
        `Full document text received. (${fullTextForFirstEventOnly?.length} chars)`
      )
    }

    if (typeof fullTextForFirstEventOnly === 'string') {
      program = new Program(fullTextForFirstEventOnly)
      trees[documentUri] = program
    } else {
      if (deltas.length) {
        program.updateSource(deltas)
      }
    }
    await program.scan()

    console.log(
      '[vscode.onDidChangeTextDocument]',
      inspect(program?.imports, inspectOpts)
    )
  }

  async runJob() {
    if (this.isRunningJob || !this.jobs.length) {
      return
    }
    this.isRunningJob = true

    while (this.jobs.length) {
      // @ts-ignore
      const job: SourceChangeEvent = this.jobs.shift()
      await this.onDidChangeTextDocument(job)
    }
    this.isRunningJob = false
  }

  run() {
    const app = new Application('jarvis', {
      vscode: {
        onDidOpenTextDocument: (
          connection: any,
          { document, text }: { document: TextDocument; text: string },
          callback: any
        ) => {
          console.log(
            '[vscode.onDidOpenTextDocument]',
            document.uri.toString(),
            document.lineCount
          )

          trees[document.uri.toString()] = new Program(text)
          callback(null, `Created AST for ${document.uri.toString()}`)
        },
        onDidChangeTextDocument: (
          connection: any,
          event: SourceChangeEvent,
          callback: any
        ) => {
          this.jobs.push(event)
          this.runJob()
        },
        onDidCloseTextDocument: (connection: any, data: any, callback: any) => {
          console.log(
            '[vscode.onDidCloseTextDocument]',
            inspect(data, inspectOpts)
          )
        }
      },
      imports: {
        echo: (
          connection: any,
          data: any,
          callback: (arg0: null, arg1: string) => void
        ) => {
          const { server } = connection

          console.log('[imports.echo]', data)
          // for (const conn of server.getClients()) {d
          //   connection.emitRemoteEvent('imports', 'message', ['some-data']) s
          // }
        }
      }
    })

    this.removeExistingIpcFile()
    const server = net.createServer([app])
    server.listen(
      path.join(
        process.platform === 'win32' ? '\\\\.\\pipe' : os.tmpdir(),
        'jarvis-ipc'
      ),
      () => {
        console.clear()
        console.log('Jarvis IPC server listening.')
      }
    )
  }

  private removeExistingIpcFile() {
    const ipcFilePath = path.join(os.tmpdir(), 'jarvis-ipc')
    if (!fs.existsSync(ipcFilePath)) {
      return
    }
    fs.unlinkSync(ipcFilePath)
  }
}
