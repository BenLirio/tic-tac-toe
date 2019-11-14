'use strict'

const ui = require('./ui')

const addHandlers = () => {
  for (let i = 0; i < 9; i++) {
    $('#board-' + i).on('click', ui.boardPressed)
  }
}

module.exports = {
  addHandlers
}
