'use strict'

const EventHandler = function () {
  // Javascript before document load
}

EventHandler.prototype.init = function () {
  // Right after document loads
  console.warn('REASIGN prototype.init', this)
  this.addEventHandlers()
}

EventHandler.prototype.addEventHandlers = function () {
  console.warn('REASIGN prototype', this)
}

module.exports = EventHandler
