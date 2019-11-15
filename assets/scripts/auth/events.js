'use strict'

const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const Form = function (action, res, err) {
  this.action = action
  this.res = res || console.log
  this.err = err || console.log
}

Form.prototype.submit = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.ajax({action: this.action, formData})
    .then(this.res)
    .catch(this.err)
}
const setUser = res => {
  store.user = res.user
}
const deleteUser = () => {
  store.user = {}
}
const signIn = new Form('sign-in', setUser)
const signUp = new Form('sign-up')
const changePassword = new Form('change-password')
const signOut = new Form('sign-out', deleteUser)

const addHandlers = () => {
  $('#sign-in').on('submit', signIn.submit.bind(signIn))
  $('#sign-up').on('submit', signUp.submit.bind(signUp))
  $('#change-password').on('submit', changePassword.submit.bind(changePassword))
  $('#logout').on('submit', signOut.submit.bind(signOut))
}

module.exports = {
  addHandlers
}
