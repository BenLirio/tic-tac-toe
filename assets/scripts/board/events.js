'use strict'

const gameEngine = require('./gameEngine')
gameEngine.init()

const addHandlers = () => {
  for (let i = 0; i < 9; i++) {
    $('#board-' + i).on('click', gameEngine.clickBoard)
  }
}

module.exports = {
  addHandlers
}
