'use strict'
const ui = require('./ui')

const addHandlers = () => {
  $('#play-game-button').on('click', ui.setGamePage)
}

module.exports = {
  addHandlers
}
