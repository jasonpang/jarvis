import { Application, net } from '@metarhia/jstp'
import os from 'os'
import path from 'path'
import fs from 'fs'
import {
  TextDocument,
  TextDocumentChangeEvent,
  Position,
  TextDocumentContentChangeEvent
} from 'vscode'
import { Program } from '@jarvis/parser'
import { inspect } from 'util'
import { SourceChangeEvent } from '@jarvis/common'

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
  static removeExistingIpcFile() {
    const ipcFilePath = path.join(os.tmpdir(), 'jarvis-ipc')
    if (!fs.existsSync(ipcFilePath)) {
      return
    }
    fs.unlinkSync(ipcFilePath)
  }

  static run() {
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
          { deltas, documentUri }: SourceChangeEvent,
          callback: any
        ) => {
          if (!deltas.length) {
            return
          }

          let program = trees[documentUri]

          if (program) {
            program.updateSource(deltas)
            program.scan()
          } else {
            program = new Program('')
            trees[documentUri] = program
          }

          // console.clear()
          console.log(
            '[vscode.onDidChangeTextDocument]',
            inspect(
              program?.imports[program.imports.length - 1]?.source[0][0],
              inspectOpts
            )
          )
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
          // for (const conn of server.getClients()) {
          //   connection.emitRemoteEvent('imports', 'message', ['some-data'])
          // }
        }
      }
    })

    Server.removeExistingIpcFile()
    const server = net.createServer([app])
    server.listen(
      path.join(
        process.platform === 'win32' ? '\\\\.\\pipe' : os.tmpdir(),
        'jarvis-ipc'
      ),
      () => {
        console.log('Jarvis IPC server listening.')
      }
    )
  }
}
