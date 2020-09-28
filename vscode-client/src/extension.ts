import {
  commands,
  ExtensionContext,
  Position,
  TextDocument,
  TextDocumentChangeEvent,
  TextLine,
  window,
  workspace
} from 'vscode'
import Client from './Client'
import StatusBar from './StatusBar'
import { SourceChangeDelta } from '@jarvis/common'
import { Application, net } from '@metarhia/jstp'
import cloneDeep from 'lodash.clonedeep'

let app: any

function asPoint(pos: Position): any {
  return { row: pos.line, column: pos.character }
}

interface HasSentFullDocumentText {
  [member: string]: boolean
}

interface PreviousDocuments {
  [member: string]: TextLine[]
}

const hasSentFullDocumentText: HasSentFullDocumentText = {}
const previousDocuments: PreviousDocuments = {}

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
  console.log('[Client] onDidOpenTextDocument:', document)

  if (!app) {
    return
  }

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

function getRowColForIndex(lines: TextLine[], targetIndex: number) {
  let index = 0

  for (const line of lines) {
    const lineLength = line.text.length
    const indexAtLineEnd = index + lineLength

    if (indexAtLineEnd >= targetIndex) {
      return {
        row: line.lineNumber,
        column: lineLength - (indexAtLineEnd - targetIndex)
      }
    }

    index = indexAtLineEnd + 1 /* +1 for line break */
  }

  return {
    row: -1,
    column: -1
  }
}

function onDidChangeTextDocument(edit: TextDocumentChangeEvent) {
  const documentUri = edit.document.uri.toString()

  const deltas = edit.contentChanges.map(e => {
    const startIndex = e.rangeOffset
    const oldEndIndex = e.rangeOffset + e.rangeLength
    const newEndIndex = e.rangeOffset + e.text.length
    // const startPosition = {
    //   row: e.range.start.line,
    //   column: e.range.start.character
    // }
    const startPosition = previousDocuments[documentUri]
      ? getRowColForIndex(previousDocuments[documentUri], startIndex)
      : asPoint(edit.document.positionAt(startIndex))
    const oldEndPosition = previousDocuments[documentUri]
      ? getRowColForIndex(previousDocuments[documentUri], oldEndIndex)
      : asPoint(edit.document.positionAt(oldEndIndex))
    // const newEndPosition = {
    //   row: e.range.end.line,
    //   column: e.range.end.character
    // }
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

  if (app) {
    app.vscode.onDidChangeTextDocument({
      documentUri,
      fullTextForFirstEventOnly: !hasSentFullDocumentText[documentUri]
        ? edit.document.getText()
        : null,
      deltas
    })

    if (hasSentFullDocumentText[documentUri]) {
      hasSentFullDocumentText[documentUri] = true
    }
  }

  if (!previousDocuments[documentUri]) {
    previousDocuments[documentUri] = []
    // If this is the first time, store every line in the document
    for (
      let lineNumber = 0;
      lineNumber < edit.document.lineCount;
      lineNumber++
    ) {
      previousDocuments[documentUri][lineNumber] = edit.document.lineAt(
        lineNumber
      )
    }
  } else {
    // Only store the lines that were changed
    for (const change of edit.contentChanges) {
      const linesDeleted =
        change.range.end.line -
        change.range.start.line -
        (change.text.split('\n').length - 1)

      if (linesDeleted > 0) {
        previousDocuments[documentUri].splice(
          change.range.start.line,
          linesDeleted
        )
      }

      for (
        let lineNumber = change.range.start.line;
        lineNumber <= change.range.end.line;
        lineNumber++
      ) {
        const lineNumberWithLineBreak = change.text.includes('\n')
          ? lineNumber + 1
          : lineNumber
        previousDocuments[documentUri][
          lineNumberWithLineBreak
        ] = edit.document.lineAt(lineNumberWithLineBreak)
      }
    }
  }
}

function onDidCloseTextDocument(document: TextDocument) {
  app.vscode.onDidCloseTextDocument(document)
}

function onServerConnection(error: any, connection: any, _app: any) {
  if (error) {
    console.error('Error connecting to server:', error)
    console.log('Retrying...')

    setTimeout(() => Client.init(onServerConnection), 500)
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
