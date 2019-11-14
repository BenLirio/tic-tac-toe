'use strict'

const ui = require('./ui')

const state = {}

const init = () => {
  state.currentTurn = true
  state.board = new Array(9).fill('?')
}

/* Game logic that happens when the user clicks a spot on the board */
const clickBoard = event => {
  const id = ui.getId(event.target)
  const index = getIndexFromId(id)
  if (isValidMove(index)) {
    setBoardValue(index)
    changeTurn()
    ui.setTurn(state.currentTurn)
    ui.setBoardSpace(index, state.board[index])
  } else {
    // Move invalid
  }
}

const isValidMove = index => {
  return state.board[index] === '?'
}

const changeTurn = () => {
  state.currentTurn = !state.currentTurn
}

const setBoardValue = index => {
  state.board[index] = state.currentTurn ? 'x' : 'o'
}

/* Takes in a board Id and return the index of the board */
const getIndexFromId = id => {
  return id.charAt(id.length - 1)
}

module.exports = {
  init,
  state,
  clickBoard
}
