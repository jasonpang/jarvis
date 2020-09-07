import { Application, net } from '@metarhia/jstp'
import os from 'os'
import path from 'path'
import fs from 'fs'
import FileParser from './FileParser'
import { TextDocument, TextDocumentChangeEvent, Position } from 'vscode'
import Parser from 'tree-sitter'

const trees: { [uri: string]: Parser.Tree } = {}

export default class Server {
  static removeExistingIpcFile() {
    fs.unlinkSync(path.join(os.tmpdir(), 'jarvis-ipc'))
  }

  static run() {
    const app = new Application('jarvis', {
      vscode: {
        onDidOpenTextDocument: (
          connection: any,
          { document, text }: { document: TextDocument; text: string },
          callback: any
        ) => {
          const result = FileParser.parse(text)
          trees[document.uri.toString()] = result
          console.log(result.rootNode.toString())
          callback(null, result)
        },
        onDidChangeTextDocument: (
          connection: any,
          {
            edit,
            deltas,
            fullText
          }: { edit: TextDocumentChangeEvent; deltas: any; fullText: string },
          callback: any
        ) => {
          if (!edit.contentChanges.length) {
            return
          }

          const old = trees[edit.document.uri.toString()]

          for (const delta of deltas) {
            old.edit(delta)
          }
          const t = FileParser.parse(fullText, old) // TODO don't use getText, use Parser.Input
          trees[edit.document.uri.toString()] = t
          console.log('[vscode.onDidChangeTextDocument]', t.rootNode.toString())
        },
        onDidCloseTextDocument: (connection: any, data: any, callback: any) => {
          console.log('[vscode.onDidCloseTextDocument]', data)
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
