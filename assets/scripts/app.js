'use strict'
// Require Authorization Events
const authEvents = require('./auth/events')
const boardEvents = require('./board/events')
const navigationEvents = require('./navigation/events')

$(() => {
  /* Add Authorization Events */
  authEvents.addHandlers()
  boardEvents.addHandlers()
  navigationEvents.addHandlers()
})
