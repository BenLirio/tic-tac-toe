'use strict'

const Ui = require('../interface/Ui')
const store = require('../store')
const ui = new Ui()



ui.displayBoard = function (board) {
  board.forEach((i, v) => $('#' + i).classList.dataset.value(v))
}

ui.displayCellByIndex = function (v, i) {
  const id = '#cell-' + i
  const cell = $(id)
  // const url1 = 'url(' + store.playerSettings.playerOne.url + ')'
  const url1 = "url('public/X.png')"
  const url2 = "url('public/O.png')"
  switch (v) {
    case 'x':
      cell.css('background-image', url1)
      break
    case 'o':
      cell.css('background-image', url2)
      break
    case '':
      cell.text('')
      break
    default:
      break
  }
}

ui.clearBoard = function () {
  for (let i = 0; i < 9; i++) {
    const id = '#cell-' + i
    $(id).css('background-image', '')
  }
}

ui.stats = function (games) {
  $('.total-games').text(games)
}

ui.setTurn = function (turn) {
  $('.current-turn').text('Current turn: ' + (turn ? 'x' : 'o'))
}

ui.invalidClick = function () {
  $('.game-alert').show(store.config.transitionSpeed)
  setTimeout(function () {
    $('.game-alert').hide(store.config.transitionSpeed)
  }, 2000)
}

module.exports = ui
