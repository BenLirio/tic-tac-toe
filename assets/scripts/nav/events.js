'use strict'

const EventHandler = require('../interface/EventHandler')
const ui = require('./ui')

const eventHandler = new EventHandler()

eventHandler.addEvents = function () {
  ui.showPageById($('.page.first-page')[0].id)
  $('button[data-set-page]').on('click', ui.showPageByEvent)
}

module.exports = eventHandler
