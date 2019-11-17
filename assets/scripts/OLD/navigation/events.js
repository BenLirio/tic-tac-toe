'use strict'

const handler = require('./handler')

const addHandlers = function () {
  $('.back').on('click', () => handler.goBackPage())
}

module.exports = {
  addHandlers
}
