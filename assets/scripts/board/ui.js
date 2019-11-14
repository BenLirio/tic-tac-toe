'use strict'

const boardPressed = event => {
  const button = event.target
  // jQuery now has access to clicked button
  $('#' + button.id)
}

module.exports = {
  boardPressed
}
