'use strict'

const sections = []
const makeSection = (index, item) => {
  sections.push(item.id)
}
$('.page').each(makeSection)

const pages = []

const Page = function (name, ...ids) {
  this.name = name
  this.sections = []
  ids.forEach(id => this.sections.push(id))
}

Page.prototype.show = function () {
  this.sections.forEach(show)
}

pages.push(new Page('sign-in', 'sign-in-page', 'sign-up-page'))
pages.push(new Page('menu', 'change-password-page', 'sign-out-page', 'menu-page'))
pages.push(new Page('game', 'game-page'))

const hide = (id) => {
  $('#' + id).hide()
}

const show = (id) => {
  $('#' + id).show()
}

const hideSections = () => {
  sections.forEach(hide)
}

const showPage = curName => {
  const currentPage = pages.find(page => page.name === curName)
  if (currentPage) {
    currentPage.show()
  }
}

const setCurrentPage = name => {
  hideSections()
  showPage(name)
}

module.exports = {
  setCurrentPage
}
