'use strict'
// Require Authorization Events
const authEvents = require('./auth/events')
const menuEvents = require('./menu/events')
const boardEvents = require('./board/events')

$(() => {
  /* Add Authorization Events */
  authEvents.addHandlers()
  menuEvents.addHandlers()
  boardEvents.addHandlers()
})
