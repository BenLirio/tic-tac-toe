'use strict'

const EventHandler = require('../interface/EventHandler')
const Game = require('./engine/Game')
const api = require('./api')
const ui = require('./ui')
let currentGame = null
const eventHandler = new EventHandler()

eventHandler.createGame = function (event) {
  api.createGame()
    .then((res) => {
      currentGame = new Game(res.game)
      ui.showPageById('game')
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
  $('.cell').on('click', event => currentGame.click(getIndexFromEvent(event)))
  $('button[data-set-page="game-loading"]').on('click', event => eventHandler.createGame(event))
  $('button[data-set-page="stats"]').on('click', event => eventHandler.getStats(event))
  $('.game-alert').hide()
}

module.exports = eventHandler

function getIndexFromEvent (event) {
  const target = event.target
  const id = getIdFromEventTarget(target)
  const index = getIndexFromId(id)
  return index
}

function getIdFromEventTarget (target) {
  const id = target.id
  return id
}

function getIndexFromId (id) {
  return id.charAt(id.length - 1)
}
