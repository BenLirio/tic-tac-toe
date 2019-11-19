'use strict'

const EventHandler = require('../interface/EventHandler')
const Game = require('./engine/Game')
const api = require('./api')
const game = new Game()
const eventHandler = new EventHandler()

eventHandler.createGame = function (event) {
  console.log(event)
  console.log(api)
  api.createGame()
    .then((res) => {
      game.create(res.game.id, res.game.player_x, res.game.player_o)
    })
    .catch(console.error)
}

eventHandler.addEvents = function () {
  $('.cell').on('click', e => game.click(e))
  $('button[data-set-page="game"]').on('click', event => eventHandler.createGame(event))
  $('button[data-set-page="stats"]').on('click')
}

module.exports = eventHandler
