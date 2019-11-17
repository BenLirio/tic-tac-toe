'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const navEvents = require('./nav/events')

$(() => {
  authEvents.init()
  gameEvents.init()
  navEvents.init()
})
