'use strict'

const boardPressed = event => {
  const button = event.target
  // jQuery now has access to clicked button
  $('#' + button.id).text('a')
}

module.exports = {
  boardPressed
}
