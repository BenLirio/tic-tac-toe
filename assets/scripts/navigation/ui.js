'use strict'

const show = function (page) {
  $('.page').hide()
  $('.page[name="' + page + '"]').show()
}

module.exports = {
  show
}
