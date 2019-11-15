'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const signIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then((res) => {
      console.log(res.user)
      store.user = res.user
    })
    .catch(console.log)
}

const onSignUp = () => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(console.log)
    .catch(console.log)
}

const onChangePassword = () => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(console.log)
    .catch(console.log)
}

const signOut = () => {
  event.preventDefault()
  api.signOut()
    .then(() => {
      store.user = {}
    })
    .catch(console.log)
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
