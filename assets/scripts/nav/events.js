'use strict'

const EventHandler = require('../interface/EventHandler')
const ui = require('./ui')

const eventHandler = new EventHandler()

eventHandler.showPageByEvent = event => {
  const id = event.target.dataset.setPage
  ui.showPageById(id)
}

eventHandler.addEvents = function () {
  ui.showPageById($('.page.first-page')[0].id)
  $('button[data-set-page]').on('click', eventHandler.showPageByEvent)
}

module.exports = eventHandler
