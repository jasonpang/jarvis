# Jarvis

Trying to improve JavaScript intellisense in Visual Studio Code.

### Server

A NodeJS server that opens an IPC-oriented Unix domain socket and listens to updates from the VSCode extension client.

It maintains its own buffer of file contents and responds to document changes forwarded from VSCode to employ tree sitter's incremental parsing.

#### Why not a language server?

A language server would run in VSCode's extension host process, which doesn't easily allow native node modules to run ([see issue](https://github.com/microsoft/vscode/issues/658)). Tree sitter is written in C, and so the only bindings that would work in VSCode is its WASM binding. But the author says the [performance is slow](https://github.com/tree-sitter/tree-sitter/tree/master/lib/binding_web#running-wasm-in-nodejs).

I'm sacrificing the portability of language server standards for custom IPC networking and message transfer.

### VSCode Client

A Visual Studio Code extension that streams document changes to the server and receives intellisense data as responses.