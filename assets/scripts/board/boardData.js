'use strict'

const state = {}

const init = () => {
  state.currentTurn = true
}

const playerMoved = () => {
  state.currentTurn = !state.currentTurn
}

module.exports = {
  init,
  state,
  playerMoved
}
