'use strict'

const boardPressed = event => {
  const button = event.target
  // jQuery now has access to clicked button
  $('#' + button.id)
}

const addHandlers = () => {
  for (let i = 0; i < 9; i++) {
    $('#board-' + i).on('click', boardPressed)
  }
}

module.exports = {
  addHandlers
}
