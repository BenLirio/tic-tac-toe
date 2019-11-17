'use strict'

const EventHandler = function () {
  // Javascript before document load
}

EventHandler.prototype.init = function () {
  this.addEvents()
}

EventHandler.prototype.addEvents = function () {
  console.debug('Please reasign addEvents:', this)
}

module.exports = EventHandler
