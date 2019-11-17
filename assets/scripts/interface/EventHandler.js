'use strict'

const EventHandler = function () {
  // Javascript before document load
}

EventHandler.prototype.init = function () {
  this.addEvents()
}

EventHandler.prototype.addEvents = function () {
  console.warn('REASIGN prototype', this)
}

module.exports = EventHandler
