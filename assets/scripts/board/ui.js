'use strict'

/** Initialize **/
const init = () => {
  $('#invalid-move').hide()
  $('#winner').hide()
}

/** Setters **/
const setBoardValue = (id, value) => {
  $('#board-' + id).text(value)
}

const setValidMove = state => {
  const validText = $('#invalid-move')
  if (state) {
    validText.hide()
  } else {
    validText.show()
  }
}

const setWin = win => {
  $('#winner').show().text(win ? 'You Win' : 'You Loose')
}

const setTurn = current => {
  const letter = current ? 'X' : 'O'
  const text = 'Current turn: ' + letter
  $('#current-turn').text(text)
}

const setTie = () => {
  $('#winner').show().text('Draw')
}

/** Getters **/
const getId = element => {
  return element.id
}

module.exports = {
  init,
  setBoardValue,
  getId,
  setValidMove,
  setWin,
  setTie,
  setTurn
}
