'use strict'

const EventHandler = require('../interface/EventHandler')
const Game = require('./engine/Game')
const game = new Game()

const eventHandler = new EventHandler()

const sampleData = {
  game: {
    id: 3,
    cells: ['', '', '', '', '', '', '', '', ''],
    over: false,
    player_x: {
      id: 1,
      email: 'and@and.com'
    },
    player_o: null
  }
}

eventHandler.createBoard = function (data) {
  game.createBoard(data)
}

const display = function (event) {
  event.target.classList.add('redc')
}

eventHandler.addEvents = function () {
  eventHandler.createBoard(sampleData)
  $('.cell').on('click', display)
}

module.exports = eventHandler
