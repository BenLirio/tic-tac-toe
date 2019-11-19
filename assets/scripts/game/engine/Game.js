'use strict'

const Board = require('./Board')
const ui = require('../ui')

const Game = function () {
  this._id = null
  this._player_x = null
  this._player_o = null
  this._turn = true
  this._board = new Board()
}

Game.prototype.setGame = function (id, playerX, playerO) {
  this._id = id
  this._player_x = playerX
  this._player_o = playerO
}

Game.prototype.click = function (event) {
  const i = getIndexFromEvent(event)
  if (this._board.cellOpen(i)) {
    this.setCell(i)
    this.changeTurn()
  }
}

Game.prototype.changeTurn = function () {
  this._turn = !this._turn
}

Game.prototype.setCell = function (i) {
  this._board.setCell(this._turn, i)
  this.display()
}

Game.prototype.display = function () {
  this._board.getCells().forEach((v, i) => {
    ui.displayCellByIndex(v, i)
  })
}

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

module.exports = Game
