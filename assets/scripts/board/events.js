'use strict'

const addHandlers = () => {
  for (let i = 0; i < 9; i++) {
    $('#board-' + i).on('click', console.log)
  }
}

module.exports = {
  addHandlers
}
