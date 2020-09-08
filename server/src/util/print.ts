import util from 'util'

export function pp(any: any, formatOptions: util.InspectOptions = {}) {
  return util.inspect(any, {
    showHidden: true,
    colors: true,
    showProxy: true,
    maxArrayLength: 15,
    maxStringLength: 150,
    compact: 3,
    sorted: true,
    getters: true,
    ...formatOptions
  })
}
