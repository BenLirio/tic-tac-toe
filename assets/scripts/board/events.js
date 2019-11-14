'use strict'

/** Require **/
const gameEngine = require('./gameEngine')
const ui = require('./ui')

/** Initialize **/
gameEngine.init()
ui.init()

/** Functions **/
const addHandlers = () => {
  for (let i = 0; i < 9; i++) {
    $('#board-' + i).on('click', gameEngine.onClick)
  }
}

module.exports = {
  addHandlers
}
