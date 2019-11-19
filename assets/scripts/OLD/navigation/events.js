'use strict'

const pages = require('./pages')

const addHandlers = function () {
  $('.page').each(pages.addPage)
  $('button[set-page]').on('click', event => pages.setPage(event.target))
  pages.setPage('sign-in')
}

module.exports = {
  addHandlers
}
