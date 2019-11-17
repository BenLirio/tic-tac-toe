'use strict'
const eventHandlers = {
  authEvents: require('./auth/events'),
  gameEvents: require('./game/events'),
  navEvents: require('./nav/events')
}

$(() => {
  for (const key in eventHandlers) {
    const eventHandler = eventHandlers[key]
    eventHandler.init()
  }
})
