'use strict'

const handler = require('./handler')
const pages = require('./pages')

const addHandlers = function () {
  $('.back').on('click', () => handler.goBackPage())
  $('.page').each(pages.addPage)
  $('button[set-page]').on('click', pages.setPage)
  pages.setPage('page-one')
}

module.exports = {
  addHandlers
}
