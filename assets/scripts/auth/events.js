'use strict'

const onLogin = event => {
  event.preventDefault()
}

const onSignUp = () => {
  event.preventDefault()
}

const addHandlers = () => {
  $('#login').on('submit', onLogin)
  $('#sign-up').on('submit', onSignUp)
}

module.exports = {
  addHandlers
}
