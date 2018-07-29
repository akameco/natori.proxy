'use strict'
const PQueue = require('p-queue')
const sanaVoice = require('sana-voice')

const queue = new PQueue({ concurrency: 1 })

module.exports = (func, key = 'てね') => {
  const handler = {
    apply(target, prop, args) {
      const result = Reflect.apply(target, prop, args)
      queue.add(() => sanaVoice(key))
      return result
    },
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver)
    },
  }
  return new Proxy(func, handler)
}
