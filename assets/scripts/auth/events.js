'use strict'

const onLogin = event => {
  event.preventDefault()
}

const onSignUp = () => {
  event.preventDefault()
}

const onChangePassword = () => {
  event.preventDefault()
}

const onLogout = () => {
  event.preventDefault()
}

const addHandlers = () => {
  $('#login').on('submit', onLogin)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('submit', onLogout)
}

module.exports = {
  addHandlers
}
