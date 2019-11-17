'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const navEvents = require('./nav/events')

$(() => {
  // First Java Script
  // Initialize all event handlers once document loads
  authEvents.init()
  gameEvents.init()
  navEvents.init()
})
