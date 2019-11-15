'use strict'

const navigation = require('./navigation')

const addHandlers = function () {
  $('.back').on('click', () => navigation.goBackPage())
}

module.exports = {
  addHandlers
}
