'use strict'

const EventHandler = require('../interface/EventHandler')
const Game = require('./engine/Game')
const api = require('./api')
const ui = require('./ui')
const game = new Game()
const eventHandler = new EventHandler()

eventHandler.createGame = function (event) {
  console.log(api)
  api.createGame()
    .then((res) => {
      game.create(res.game.id, res.game.player_x, res.game.player_o)
    })
    .catch(console.error)
}

eventHandler.getStats = function (event) {
  api.getStats()
    .then(res => {
      ui.stats(res.games.length)
    })
    .catch(console.log)
}

eventHandler.addEvents = function () {
  $('.cell').on('click', e => game.click(e))
  $('button[data-set-page="game"]').on('click', event => eventHandler.createGame(event))
  $('button[data-set-page="stats"]').on('click', event => eventHandler.getStats(event))
}

module.exports = eventHandler
