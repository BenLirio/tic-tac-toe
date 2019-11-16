'use strict'

const handler = require('./handler')
const pages = require('./pages')

const addHandlers = function () {
  $('.back').on('click', () => handler.goBackPage())
  $('.page').each(pages.addPage)
}

module.exports = {
  addHandlers
}
