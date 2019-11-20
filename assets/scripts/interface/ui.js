'use strict'

const Ui = function () {

}

Ui.prototype.showPageById = function (id) {
  console.assert(typeof id === 'string', 'only accepts strings')
  $('.page').hide(300)
  $('#' + id).show(300)
}

module.exports = Ui
