'use strict'

const Page = function (name, page) {
  this.name = name
  this.ids = page
}

const pageHandler = {
  pages: []
}

pageHandler.addPage = (name, ids) => {
  pageHandler.pages.push(new Page(name, ids))
}

pageHandler.addPage('login', ['sign-in-page', 'sign-up-page'])
pageHandler.addPage('info', ['change-password-page', 'sign-out-page'])

const hide = function (id) {
  $('#' + id).hide()
}

const show = function (id) {
  $('#' + id).show()
}

pageHandler.setCurrentPage = function (name) {
  pageHandler.pages.forEach((page) => {
    if (page.name === name) {
      page.ids.forEach((id) => show(id))
    } else {
      page.ids.forEach((id) => hide(id))
    }
  })
}
pageHandler.setCurrentPage('login')

module.exports = {
  setCurrentPage: pageHandler.setCurrentPage
}
