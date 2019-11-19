'use strict'

const EventHandler = require('../interface/EventHandler')
const Game = require('./engine/Game')
const game = new Game()
const eventHandler = new EventHandler()

eventHandler.addEvents = function () {
  game.setGame(1, {id: 5, email: 'ben@gmail.com'})
  $('.cell').on('click', e => game.click(e))
}

module.exports = eventHandler
