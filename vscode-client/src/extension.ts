import {
  commands,
  ExtensionContext,
  Position,
  TextDocument,
  TextDocumentChangeEvent,
  window,
  workspace
} from 'vscode'
import Client from './Client'
import StatusBar from './StatusBar'
import { SourceChangeDelta } from '@jarvis/common'
import { Application, net } from '@metarhia/jstp'

let app: any

function asPoint(pos: Position): any {
  return { row: pos.line, column: pos.character }
}

export function activate(context: ExtensionContext) {
  console.log('Extension activated.')

  context.subscriptions.push(
    commands.registerCommand('jarvis.show-status-notification', () => {
      window.showInformationMessage('Running.')
    })
  )

  context.subscriptions.push(StatusBar.activate())

  context.subscriptions.push(
    workspace.onDidOpenTextDocument(onDidOpenTextDocument)
  )
  context.subscriptions.push(
    workspace.onDidChangeTextDocument(onDidChangeTextDocument)
  )
  context.subscriptions.push(
    workspace.onDidCloseTextDocument(onDidCloseTextDocument)
  )

  Client.init(onServerConnection)
}

async function onDidOpenTextDocument(document: TextDocument) {
  await app.vscode.onDidOpenTextDocument(
    {
      document,
      text: document.getText()
    },
    (_: any, result: any) => {
      console.log('[Client] onDidOpenTextDocument Parse Result:', result)
    }
  )
}

function onDidChangeTextDocument(edit: TextDocumentChangeEvent) {
  const deltas = edit.contentChanges.map(e => {
    const startIndex = e.rangeOffset
    const oldEndIndex = e.rangeOffset + e.rangeLength
    const newEndIndex = e.rangeOffset + e.text.length
    const startPosition = asPoint(edit.document.positionAt(startIndex))
    const oldEndPosition = asPoint(edit.document.positionAt(oldEndIndex))
    const newEndPosition = asPoint(edit.document.positionAt(newEndIndex))

    return {
      startIndex,
      oldEndIndex,
      newEndIndex,
      startPosition,
      oldEndPosition,
      newEndPosition,
      text: e.text
    }
  })

  app.vscode.onDidChangeTextDocument({
    event: {
      documentUri: edit.document.uri,
      deltas
    }
  })
}

function onDidCloseTextDocument(document: TextDocument) {
  app.vscode.onDidCloseTextDocument(document)
}

function onServerConnection(error: any, connection: any, _app: any) {
  if (error) {
    console.error('Error connecting to server:', error)
    return
  }
  app = _app

  console.log('Connected to server.')

  app.imports.on('message', (data: any) =>
    console.log('[imports.message]', data)
  )

  app.imports.echo(`Hello from VSCode extension client.`, (err: any) => {
    if (err) console.error(err)
  })
}

export function deactivate() {}
