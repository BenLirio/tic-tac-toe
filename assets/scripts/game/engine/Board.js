'use strict'

const Cell = require('./Cell')

const Board = function () {
  this._cells = new Array(9).fill().map(v => new Cell())
}

Board.prototype.isFull = function () {
  return this._cells.every(cell => cell.isSet())
}

Board.prototype.cellOpen = function (i) {
  return !this._cells[i].isSet()
}

Board.prototype.getCells = function () {
  return this._cells.map(v => v.getValue())
}

Board.prototype.getPlayerCells = function (player) {
  const sym = player ? 'x' : 'o'
  const array = this._cells.map((v, i) => {
    if (v.getValue() === sym) {
      return ('x' + i)
    } else {
      return ('-' + i)
    }
  })
  return array.join('')
}

Board.prototype.setCells = function (cells) {
  cells.forEach(this.setCell)
}

Board.prototype.setCell = function (v, i) {
  if (v === true) {
    this._cells[i].setX()
  } else if (v === false) {
    this._cells[i].setO()
  } else if (v === 'x') {
    this._cells[i].setX()
  } else if (v === 'o') {
    this._cells[i].setO()
  } else if (v === '') {
    this._cells[i].reset()
  } else {
    console.warn('Incorect cell value')
  }
}

module.exports = Board
