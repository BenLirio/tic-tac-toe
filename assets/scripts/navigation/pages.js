'use strict'

const ui = require('./ui')

const Page = function (params = {}) {
  Object.assign(this, params)
}

const PageHandler = function () {
  this.pages = {}
}
const pageHandler = new PageHandler()

PageHandler.prototype.addPage = (...params) => {
  const page = params[1]
  const name = page.getAttribute('name')
  const parent = page.getAttribute('parent')
  pageHandler.pages[name] = new Page({name, parent})
  ui.show('page-one')
}

PageHandler.prototype.setActivePage = function (page) {
  // Hide all pages

  // Set one page to active
}


module.exports = pageHandler
