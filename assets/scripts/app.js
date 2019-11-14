'use strict'
// Require Authorization Events
const authEvents = require('./auth/events')

$(() => {
  /* Add Authorization Events */
  authEvents.addHandlers()
})
