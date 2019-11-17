'use strict'

const EventHandler = require('../interface/EventHandler')

const eventHandler = new EventHandler()

eventHandler.addEvents = function () {
  $('button[data-set-page]').on('click', console.log)
}

module.exports = eventHandler
