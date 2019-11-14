'use strict'

const state = {}

const init = () => {
  state.currentTurn = true
}

const playerMoved = move => {
  state.currentTurn = !state.currentTurn
}

module.exports = {
  init,
  state,
  playerMoved
}
