'use strict'

const setBoardSpace = (id, value) => {
  $('#board-' + id).text(value)
}

const getId = element => {
  return element.id
}

const onInvalidMove = () => {
  $('#invalid-move').show()
}

const onValidMove = () => {
  $('#invalid-move').hide()
}

const showWin = win => {
  $('#winner').show().text(win ? 'You Win' : 'You Loose')
}

const setTurn = current => {
  const letter = current ? 'X' : 'O'
  const text = 'Current turn: ' + letter
  $('#current-turn').text(text)
}

const init = () => {
  $('#invalid-move').hide()
  $('#winner').hide()
}

module.exports = {
  setBoardSpace,
  getId,
  onInvalidMove,
  onValidMove,
  showWin,
  setTurn,
  init
}
