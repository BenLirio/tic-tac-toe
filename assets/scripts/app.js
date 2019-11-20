'use strict'
const store = require('./store')

store.config = {
  transitionSpeed: 300,
  alertTransitionSpeed: 300,
  transitionIn: 'fadeIn',
  transitionOut: 'fadeOut'
}
store.playerSettings = {
  playerOne: {
    symbol: 'X',
    url: "https://i.imgur.com/FjKhmBc.png"
  },
  playerTwo: {
    symbol: 'O',
    url: "https://i.imgur.com/8t3dmb6.png"
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
