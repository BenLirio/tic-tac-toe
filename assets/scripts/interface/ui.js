'use strict'

const store = require('../store')

const Ui = function () {

}

Ui.prototype.showPageById = function (id) {
  $('.page')[store.config.transitionOut](store.config.transitionSpeed)
  $('#' + id)[store.config.transitionIn](store.config.transitionSpeed)
}

module.exports = Ui
