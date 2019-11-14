'use strict'

const setBoardSpace = (id, value) => {
  $('#board-' + id).text(value)
}

module.exports = {
  setBoardSpace
}
