'use strict'

const Board = require('./Board')
const ui = require('../ui')
const api = require('../api')

const Game = function (game) {
  this.id = game.id
  this.player_x = game.player_x
  this.player_o = game.player_o
  this.over = game.over
  this.turn = true
  this.board = new Board(game.cells)
  this.isTie = false
  this.processingClick = false
  ui.setTurn(this.turn)
}

Game.prototype.click = function (index) {
  if (!this.processingClick) {
    const board = this.board
    if (board.cellOpen(index)) {
      this.processClick(index)
    } else {
      this.invalidClick()
    }
  } else {
    console.warn('Sorry for the lag waiting for server respose...')
  }
}

Game.prototype.processClick = function (index) {
  // move is valid
  const value = this.setCell(index)
  if (this.checkWin()) {
    this.over = true
    ui.showPageById(this.turn ? 'win' : 'lose')
  } else if (this.checkTie()) {
    this.isTie = true
    ui.showPageById('tie')
  }
  api.updateGame(this.id, index, value, this.over)
    .then(() => {
      this.processingClick = false
    })
    .catch(console.error)
  this.processingClick = true
  this.changeTurn()
}

Game.prototype.invalidClick = function () {
  ui.invalidClick()
}

Game.prototype.changeTurn = function () {
  this.turn = !this.turn
  ui.setTurn(this.turn)
}

Game.prototype.setCell = function (i) {
  setTimeout(function () {
    this.display()
  }.bind(this), 0)
  return this.board.setCell(this.turn, i)
}

Game.prototype.display = function () {
  this.board.getCells().forEach((v, i) => {
    ui.displayCellByIndex(v, i)
  })
}

Game.prototype.checkTie = function () {
  return this.board.isFull() && !this.over
}

Game.prototype.checkWin = function () {
  const cells = this.board.getPlayerCells(this.turn)
  const tests = [
    /x.....x.....x/,
    /x.x.x[258]/,
    /x...x4..x/,
    /x.......x4......x/
  ]
  return tests.some(regex => regex.test(cells))
}

module.exports = Game
