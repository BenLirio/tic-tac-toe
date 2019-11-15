'use strict'

const Page = function (parent, ids) {
  this.parent = parent
  this.ids = ids
}

Page.prototype.show = function () {
  this.ids.forEach(show)
}
const Navigation = function () {
  this.currentPage = null
  this.pages = {}
  this.sections = []
  $('.page').each((index, item) => this._makeSection(index, item))
}
Navigation.prototype.addPage = function (params) {
  this.pages[params.name] = new Page(params.parent, params.ids)
}

Navigation.prototype.setCurrentPage = function (name) {
  this.currentPage = this.pages[name]
  this._showPage(name)
}
Navigation.prototype.goBackPage = function () {
  this._showPage(this.currentPage.parent)
}
Navigation.prototype._makeSection = function (index, item) {
  this.sections.push(item.id)
}
Navigation.prototype._hideSections = function () {
  this.sections.forEach(hide)
}
Navigation.prototype._showPage = function (name) {
  this._hideSections()
  this.pages[name].show()
}

const hide = (id) => {
  $('#' + id).hide()
}

const show = (id) => {
  $('#' + id).show()
}

module.exports = Navigation
