'use strict'

const forms = require('./forms')

const addHandlers = () => {
  const onSignIn = forms.signIn.submit
  const onSignUp = forms.signUp.submit
  const onChangePassword = forms.changePassword.submit
  const onSignOut = forms.signOut.submit

  $('#sign-in')
    .on(
      'submit',
      onSignIn.bind(forms.signIn)
    )
  $('#sign-up')
    .on(
      'submit',
      onSignUp.bind(forms.signUp)
    )
  $('#change-password')
    .on(
      'submit',
      onChangePassword.bind(forms.changePassword)
    )
  $('#logout')
    .on(
      'submit',
      onSignOut.bind(forms.signOut)
    )
}

module.exports = {
  addHandlers
}
