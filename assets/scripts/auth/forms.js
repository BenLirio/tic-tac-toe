'use strict'

const store = require('../store')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const navigation = require('../navigation/pages')

const Form = function (data) {
  this.action = data.action
  this.res = data.res || console.log
  this.err = data.err || console.log
}

Form.prototype.submit = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.ajax({action: this.action, formData})
    .then(this.res)
    .catch(this.err)
}

const forms = function () {
}

forms.addForm = function (data) {
  this[data.name] = new Form(data)
}

const onSignIn = res => {
  store.user = res.user
  navigation.setCurrentPage('menu')
}
const onSignOut = () => {
  store.user = {}
  navigation.setCurrentPage('sign-in')
}

forms.addForm({name: 'signIn', action: 'sign-in', res: onSignIn})
forms.addForm({name: 'signUp', action: 'sign-up'})
forms.addForm({name: 'changePassword', action: 'change-password'})
forms.addForm({name: 'signOut', action: 'sign-out', res: onSignOut})

navigation.setCurrentPage('sign-in')

module.exports = forms
