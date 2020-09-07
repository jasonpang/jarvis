import { StatusBarItem, StatusBarAlignment, window, ThemeColor } from 'vscode'

let StatusBarItem: StatusBarItem

export default class StatusBar {
  static activate() {
    StatusBarItem = window.createStatusBarItem(StatusBarAlignment.Left, 100)
    StatusBarItem.text = '$(hubot) Jarvis'
    StatusBarItem.tooltip = 'Running'
    StatusBarItem.color = 'button.background'
    StatusBarItem.command = 'jarvis.show-status-notification'
    StatusBarItem.show()

    return StatusBarItem
  }
}
