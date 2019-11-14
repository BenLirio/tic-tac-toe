'use strict'

const gameEngine = require('./gameEngine')
const ui = require('./ui')
gameEngine.init()
ui.init()

const addHandlers = () => {
  for (let i = 0; i < 9; i++) {
    $('#board-' + i).on('click', gameEngine.onClick)
  }
}

module.exports = {
  addHandlers
}
