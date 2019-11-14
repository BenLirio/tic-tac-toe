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
    if (checkWin()) {
      // Show win
    }
    changeTurn()
    ui.setTurn(state.currentTurn)
    ui.setBoardSpace(index, state.board[index])
  } else {
    // Move invalid
  }
}

const checkWin = () => {
  const winSituations = [
    [
      true, true, true,
      false, false, false,
      false, false, false
    ],
    [
      false, false, false,
      true, true, true,
      false, false, false
    ],
    [
      false, false, false,
      false, false, false,
      true, true, true
    ],
    [
      true, false, false,
      true, false, false,
      true, false, false
    ],
    [
      false, true, false,
      false, true, false,
      false, true, false
    ],
    [
      false, false, true,
      false, false, true,
      false, false, true
    ],
    [
      true, false, false,
      false, true, false,
      false, false, true
    ],
    [
      false, false, true,
      false, true, false,
      true, false, false
    ]
  ]
  for (const situation of winSituations) {
    let win = true
    for (const [index, space] of situation.entries()) {
      if (space && state.board[index] !== getCurrentSymbol()) {
        win = false
      }
    }
    if (win) {
      return true
    }
  }
  return false
}

const isValidMove = index => {
  return state.board[index] === '?'
}

const changeTurn = () => {
  state.currentTurn = !state.currentTurn
}

const setBoardValue = index => {
  state.board[index] = getCurrentSymbol()
}

/* Takes in a board Id and return the index of the board */
const getIndexFromId = id => {
  return id.charAt(id.length - 1)
}

const getCurrentSymbol = () => {
  return state.currentTurn ? 'x' : 'o'
}

module.exports = {
  init,
  state,
  clickBoard
}
