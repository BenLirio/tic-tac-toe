'use strict'

const gameEngine = require('./gameEngine')
gameEngine.init()

const boardPressed = event => {
  const button = event.target
  $('#' + button.id).text(button.id + gameEngine.state.currentTurn)
  gameEngine.playerMoved(button.id)
}

module.exports = {
  boardPressed
}
