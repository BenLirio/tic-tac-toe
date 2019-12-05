'use strict'

const Cell = require('./Cell')

const Board = function (cells) {
  this.cells = []
  cells.forEach(cell => {
    this.cells.push(new Cell(cell))
  })
}

Board.prototype.isFull = function () {
  return this.cells.every(cell => cell.isSet())
}

Board.prototype.cellOpen = function (i) {
  return !this.cells[i].isSet()
}

Board.prototype.getCells = function () {
  return this.cells.map(v => v.getValue())
}

Board.prototype.getPlayerCells = function (player) {
  const sym = player ? 'x' : 'o'
  const array = this.cells.map((v, i) => {
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
  let value = ''
  if (v === true) {
    value = this.cells[i].setX()
  } else if (v === false) {
    value = this.cells[i].setO()
  } else if (v === 'x') {
    value = this.cells[i].setX()
  } else if (v === 'o') {
    value = this.cells[i].setO()
  } else {
    value = this.cells[i].reset()
  }
  return value
}

module.exports = Board
