'use strict'
const store = require('./store')

store.config = {
  transitionSpeed: 300,
  alertTransitionSpeed: 300,
  transitionIn: 'show',
  transitionOut: 'hide'
}
store.playerSettings = {
  playerOne: {
    symbol: 'X'
  },
  playerTwo: {
    symbol: 'O'
  }
}

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
