# Jarvis

Jarvis's goal is to improve JavaScript intellisense in Visual Studio Code.

#### What's wrong with the built-in intellisense or other similar extensions?

VSCode's built-in intellisense has too much of a delay. It can be frustrating to sometimes wait up to fifteen seconds for its options to delete unused variables to appear.

I also use ESLint for catching JavaScript errors, but [incremental linting isn't supported](https://github.com/microsoft/vscode-eslint/issues/91#issuecomment-593342696). There can be an occassional three to five second lag to bring up the auto-fix menu for React `useEffect()` fixes.

Another extension I use is [`vscode-js-import`](https://github.com/wangtao0101/vscode-js-import) because VSCode's built-in JavaScript intellisense rarely provides auto-import suggestions. `vscode-js-import` is similarly slow. It uses `babylon` (i.e. Babel three years ago) for AST parsing and some regex strings for analyzing imports.

Combined, these extensions compound each other's delays because [extensions run in VSCode's extension host process in single-threaded environment](https://github.com/microsoft/vscode/issues/75627). There are a couple VSCode issue posts that show a dummy test extension can be made to intentionally delay a few seconds and this affects all other extensions providing autocomplete.

Personally, I only use a couple features from each extension: auto-importing, React effect hook auto-fixing, and unused variable deletion. Implementing these would be a fun project and learning opportunity.

### Server

A NodeJS server that opens an IPC-oriented Unix domain socket and listens to updates from the VSCode extension client.

It maintains its own buffer of file contents and responds to document changes forwarded from VSCode to employ tree sitter's incremental parsing.

#### Why not a language server?

A language server would run in VSCode's extension host process, which doesn't easily allow native node modules to run ([see issue](https://github.com/microsoft/vscode/issues/658)). Tree sitter is written in C, so it provides native bindings. Tree sitter does have WASM bindings, but the author says the [performance of WASM bindings is slow](https://github.com/tree-sitter/tree-sitter/tree/master/lib/binding_web#running-wasm-in-nodejs).

I'm sacrificing the portability of language server standards for custom IPC networking and message transfer.

Another drawback is this program has to run before VSCode and isn't updated together with the extension.

### VSCode Client

A Visual Studio Code extension that streams document changes to the server and receives intellisense data as responses. This is mostly a dumb client that forwards events and receives actionable data.