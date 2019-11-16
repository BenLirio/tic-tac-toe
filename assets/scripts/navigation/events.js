'use strict'

const handler = require('./handler')
const pages = require('./pages')

const addHandlers = function () {
  $('.back').on('click', () => handler.goBackPage())
  $('.page').each(pages.addPage)
  $('button[set-page]').on('click', event => pages.setPage(event.target))
  pages.setPage('sign-in')
}

module.exports = {
  addHandlers
}
