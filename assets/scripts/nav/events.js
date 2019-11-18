'use strict'

const EventHandler = require('../interface/EventHandler')
const ui = require('./ui')

const eventHandler = new EventHandler()

/**
 * Triggers when user presses button with setPage dataset
 * @param  {object} event event with the button as a target
 */
eventHandler.showPageByEvent = event => {
  const id = event.target.dataset.setPage
  ui.showPageById(id)
}

/**
 * Initializes all of the events for navigation
 */
eventHandler.addEvents = function () {
  ui.showPageById($('.page.first-page')[0].id)
  $('button[data-set-page]').on('click', eventHandler.showPageByEvent)
}

module.exports = eventHandler
