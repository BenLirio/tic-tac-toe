'use strict'

const Ui = function () {

}

Ui.prototype.showPageById = function (id) {
  console.assert(typeof id === 'string', 'only accepts strings')
  $('.page').hide()
  $('#' + id).show()
}

module.exports = Ui
