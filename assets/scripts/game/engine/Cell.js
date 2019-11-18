'use strict'

const Cell = function () {
  this._value = 0
}
Cell.prototype.reset = function () {
  this._vlaue = 0
}
Cell.prototype.setValue = function (value) {
  if (value) {
    this._value = 1
  } else {
    this._value = -1
  }
}
Cell.prototype.hasBeenSet = function () {
  return this._value === 0
}
Cell.prototype.getSymbol = function () {
  let cellSymbol = ''
  switch (this._value) {
    case 1:
      cellSymbol = 'x'
      break
    case 2:
      cellSymbol = 'y'
      break
    case 3:
      cellSymbol = ''
      break
    default:
      console.warn('Invalid cell value')
      break
  }
  return cellSymbol
}

module.exports = Cell
