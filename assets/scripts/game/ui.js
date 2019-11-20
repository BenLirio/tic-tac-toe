'use strict'

const Ui = require('../interface/Ui')

const ui = new Ui()

ui.displayBoard = function (board) {
  console.log(board)
  board.forEach((i, v) => $('#' + i).classList.dataset.value(v))
}

ui.displayCellByIndex = function (v, i) {
  const text = '#cell-' + i
  const classList = $(text)[0].classList
  classList.remove('x-style')
  classList.remove('o-style')
  classList.remove('unset-style')
  switch (v) {
    case 'x':
      classList.add('x-style')
      break
    case 'o':
      classList.add('o-style')
      break
    case '':
      classList.add('unset-style')
      break
    default:
      console.warn('not a style')
      break
  }
}

ui.resetBoard = function () {
  for (let i = 0; i < 9; i++) {
    const text = '#cell-' + i
    const classList = $(text)[0].classList
    classList.remove('x-style')
    classList.remove('o-style')
    classList.add('unset-style')
  }
}

ui.stats = function (games) {
  $('.total-games').text(games)
}

ui.setTurn = function (turn) {
  $('.current-turn').text('Current turn: ' + (turn ? 'x' : 'o'))
}

ui.invalidClick = function () {
  $('.game-alert').show(300)
  setTimeout(function () {
    $('.game-alert').hide(300)
  }, 2000)
}

module.exports = ui
