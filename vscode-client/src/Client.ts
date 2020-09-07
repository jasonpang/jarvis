import { net } from '@metarhia/jstp'
import os from 'os'
import path from 'path'

const IPC_INTERFACES = ['imports', 'vscode']

export default class Client {
  static init(onServerConnection: any) {
    net.connectAndInspect(
      'jarvis',
      null,
      IPC_INTERFACES,
      path.join(
        process.platform === 'win32' ? '\\\\.\\pipe' : os.tmpdir(),
        'jarvis-ipc'
      ),
      onServerConnection
    )
  }
}
