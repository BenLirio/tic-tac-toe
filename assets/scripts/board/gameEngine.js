'use strict'

const ui = require('./ui')

const state = {}

const init = () => {
  state.over = false
  state.currentTurn = true
  state.board = new Array(9).fill('?')
}

/* Game logic that happens when the user clicks a spot on the board */
const clickBoard = event => {
  if (!state.over) {
    const index = getIndexOfEvent(event)
    if (isValidMove(index)) {
      setBoardValue(index)
      if (!checkWin()) {
        changeTurn()
      }
    }
  }
}

const getIndexOfEvent = event => {
  const id = ui.getId(event.target)
  return getIndexFromId(id)
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
      state.over = true
      ui.showWin(state.currentTurn)
      return true
    }
  }
  return false
}

const isValidMove = index => {
  let valid = false
  if (state.board[index] === '?') {
    ui.onValidMove()
    valid = true
  } else {
    ui.onInvalidMove()
  }
  return valid
}

const changeTurn = () => {
  state.currentTurn = !state.currentTurn
  ui.setTurn(state.currentTurn)
}

const setBoardValue = index => {
  state.board[index] = getCurrentSymbol()
  ui.setBoardSpace(index, state.board[index])
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
