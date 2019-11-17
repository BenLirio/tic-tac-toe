'use strict'
// Require Authorization Events
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const navEvents = require('./nav/events')

$(() => {
  /* Add Authorization Events */
  authEvents.addHandlers()
  gameEvents.addHandlers()
  navEvents.addHandlers()
})
