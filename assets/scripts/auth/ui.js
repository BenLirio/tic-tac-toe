'use strict'

const Page = function (name, page) {
  this.name = name
  this.page = page
}

const pageHandler = function () {

}

pageHandler.addPage = (name, ids) => {
  this.pages.push(new Page(name, ids))
}

pageHandler.addPage('login', ['sign-in', 'sign-up'])

pageHandler.setCurrentPage = function (curName) {

}

module.exports = {
  setCurrentPage: pageHandler.setCurrentPage
}
