'use strict'

const Page = function (params = {}) {
  Object.assign(this, params)
}

const PageHandler = function () {
  this.pages = {}
}
const pageHandler = new PageHandler()

PageHandler.prototype.addPage = function (...params) {
  const page = params[1]
  const name = page.getAttribute('name')
  const parent = page.getAttribute('parent')
  this.pages[name] = new Page({name, parent})
}.bind(pageHandler)



module.exports = pageHandler
