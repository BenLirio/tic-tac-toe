'use strict'

const ui = require('./ui')

const state = {}

const init = () => {
  state.currentTurn = true
  state.board = new Array(9).fill('?')
}

const checkValidMove = index => {
  if (state.board[index] === '?') {
    state.board[index] = state.currentTurn ? 'x' : 'o'
    state.currentTurn = !state.currentTurn
    ui.setBoardSpace(index, state.board[index])
  }
}

const clickBoard = event => {
  const button = event.target
  const buttonID = button.id
  const index = buttonID.charAt(buttonID.length - 1)
  // $('#' + button.id).text(button.id + gameEngine.state.currentTurn)
  // state.currentTurn = !state.currentTurn
  checkValidMove(index)
}

module.exports = {
  init,
  state,
  clickBoard
}
