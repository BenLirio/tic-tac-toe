'use strict'

const api = require('./api')

const signIn = event => {
  event.preventDefault()
  api.signIn()
    .then()
    .catch()
}

const onSignUp = () => {
  event.preventDefault()
  api.signUp()
    .then()
    .catch()
}

const onChangePassword = () => {
  event.preventDefault()
  api.changePassword()
    .then()
    .catch()
}

const signOut = () => {
  event.preventDefault()
  api.signOut()
    .then()
    .catch()
}

const addHandlers = () => {
  $('#sign-in').on('submit', signIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('submit', signOut)
}

module.exports = {
  addHandlers
}
