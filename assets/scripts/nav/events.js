'use strict'

const EventHandler = require('../interface/EventHandler')
const ui = require('./ui')

const eventHandler = new EventHandler()

eventHandler.addEvents = function () {
  $('button[data-set-page]').on('click', ui.showPageByEvent)
}

module.exports = eventHandler
