import React from 'react'
import Server from './Server'
import { Console } from './Console'
import { render } from 'ink'
import { Context } from './types'

export class App {
  private context: Context = {
    // @ts-ignore
    server: null
  }

  constructor() {
    this.context.server = new Server(this.context)
  }
  run() {
    this.context.server.run()
    // render(<Console context={this.context} />)
  }
}
