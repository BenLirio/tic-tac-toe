'use strict'

const pages = require('./pages')

const addHandlers = function () {
  $('.back').on('click', () => pages.goBackPage())
}

module.exports = {
  addHandlers
}
