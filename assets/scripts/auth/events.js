'use strict'

const forms = require('./formClasses/forms')

const addHandlers = () => {
  $('#sign-in').on('submit', forms.signIn.submit.bind(forms.signIn))
  $('#sign-up').on('submit', forms.signUp.submit.bind(forms.signUp))
  $('#change-password').on('submit', forms.changePassword.submit.bind(forms.changePassword))
  $('#logout').on('submit', forms.signOut.submit.bind(forms.signOut))
}

module.exports = {
  addHandlers
}
