'use strict'

const Cell = function (v) {

  this.value = v || ''
}

Cell.prototype.isSet = function () {
  return this.value !== ''
}

Cell.prototype.setX = function () {
  this.value = 'x'
  return 'x'
}

Cell.prototype.setO = function () {
  this.value = 'o'
  return 'o'
}

Cell.prototype.reset = function () {
  this.value = ''
  return ''
}

Cell.prototype.getValue = function () {
  return this.value
}

module.exports = Cell
