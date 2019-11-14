'use strict'

/** Requirements **/
const ui = require('./ui')

/** Variables **/
const state = {}

/** Initialize **/
const init = () => {
  state.over = false
  state.currentTurn = true
  state.board = new Array(9).fill('?')
}

/** On events **/
const onClick = event => {
  if (!state.over) {
    const index = getIndexOfEvent(event)
    if (isValidMove(index)) {
      setBoardValue(index)
      if (!isWin()) {
        setTurn()
      }
    }
  }
}

/** get the game states **/
const isWin = () => {
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
      ui.setWin(state.currentTurn)
      return true
    }
  }
  return false
}

const isValidMove = index => {
  let valid = false
  if (state.board[index] === '?') {
    ui.setValidMove(true)
    valid = true
  } else {
    ui.setValidMove(false)
  }
  return valid
}

const getCurrentSymbol = () => {
  return state.currentTurn ? 'x' : 'o'
}

/** set game states **/
const setTurn = () => {
  state.currentTurn = !state.currentTurn
  ui.setTurn(state.currentTurn)
}

const setBoardValue = index => {
  state.board[index] = getCurrentSymbol()
  ui.setBoardValue(index, state.board[index])
}

/** Utilities **/
const getIndexOfEvent = event => {
  const id = ui.getId(event.target)
  return getIndexFromId(id)
}

const getIndexFromId = id => {
  return id.charAt(id.length - 1)
}

module.exports = {
  init,
  state,
  onClick
}
