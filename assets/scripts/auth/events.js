'use strict'

const onLogin = event => {
  event.preventDefault()
}

const addHandlers = () => {
  $('#login').on('submit', onLogin)
}

module.exports = {
  addHandlers
}
