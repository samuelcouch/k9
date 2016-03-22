export default class Bark extends Error {
  constructor (message, opts = {}) {
    super(message)
    this.name = 'K9 Exception'
    Object.assign(this, opts)
  }
}
