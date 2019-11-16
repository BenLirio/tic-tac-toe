'use strict'

const forms = require('./forms')

const addHandlers = () => {
  $('form').on('submit', forms.submit)
  $('form').on('keyup', forms.checkValidity)
}

module.exports = {
  addHandlers
}
