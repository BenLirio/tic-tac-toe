'use strict'

const Cell = require('./Cell')

const Board = function () {
  this._board = Array(9).fill(new Cell())
}

module.exports = Board
