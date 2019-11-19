'use strict'

const Board = require('./Board')
const ui = require('../ui')
const api = require('../api')

const Game = function () {
  this._id = null
  this._player_x = null
  this._player_o = null
  this._over = false
  this._turn = true
  this._board = new Board()
}

Game.prototype.create = function (id, playerX, playerO) {
  this._id = id
  this._player_x = playerX
  this._player_o = playerO
  this._over = false
  this._turn = true
  this._board = new Board()
  ui.resetBoard()
  console.log(this)
}

Game.prototype.click = function (event) {
  ui.cancelInvalid()
  const i = getIndexFromEvent(event)
  if (this._board.cellOpen(i)) {
    this.setCell(i)
    if (this.checkWin()) {
      this._over = true
    } else if (this.isTie()) {
      console.log('is tie')
    }
    api.updateGame(i, this._turn, this._over, this._id)
      .then((res) => {
        if (this._over) {
          ui.showPageById(this._turn ? 'win' : 'loose')
        } else {
          this.changeTurn()
          ui.setTurn(this._turn)
        }
      })
      .catch(console.error)
  } else {
    ui.showInvalid()
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

Game.prototype.isTie = function () {
  return this._board.isFull() && !this._over
}

Game.prototype.checkWin = function () {
  const cells = this._board.getPlayerCells(this._turn)
  const tests = [
    /x.....x.....x/,
    /x.x.x[258]/,
    /x...x4..x/,
    /x.......x4......x/
  ]
  return tests.some(regex => regex.test(cells))
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
