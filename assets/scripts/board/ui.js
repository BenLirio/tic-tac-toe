'use strict'

const setBoardSpace = (id, value) => {
  $('#board-' + id).text(value)
}

const getId = element => {
  return element.id
}

const setTurn = turn => {

}

module.exports = {
  setBoardSpace,
  getId,
  setTurn
}
