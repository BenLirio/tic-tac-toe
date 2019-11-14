'use strict'

const boardData = require('./boardData')
boardData.init()

const boardPressed = event => {
  const button = event.target
  // jQuery now has access to clicked button
  $('#' + button.id).text(button.id + boardData.state.currentTurn)
  boardData.playerMoved()
}

module.exports = {
  boardPressed
}
