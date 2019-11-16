'use strict'

const Page = function (name, parent) {
  this.name = name
  this.parent = parent
}

const initPages = function () {
  console.log('setting up page:', this)
}

module.exports = {
  initPages
}
