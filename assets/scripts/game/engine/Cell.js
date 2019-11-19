'use strict'

const Cell = function () {
  this._value = ''
}

Cell.prototype.isSet = function () {
  return this._value !== ''
}

Cell.prototype.setX = function () {
  this._value = 'x'
}

Cell.prototype.setO = function () {
  this._value = 'o'
}

Cell.prototype.reset = function () {
  this._value = ''
}

Cell.prototype.getValue = function () {
  return this._value
}

module.exports = Cell
