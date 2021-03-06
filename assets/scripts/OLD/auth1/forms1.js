'use strict'

const store = require('../store')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const navigationHandler = require('../navigation/handler')

const Form = function (data) {
  this.action = data.action
  this.blank = () => {}
  this.res = data.res || this.blank
  this.err = data.err || this.blank
}

Form.prototype.submit = function (event) {
  event.preventDefault()
  event.stopPropagation()
  if (event.target.checkValidity()) {
    const form = event.target
    const formData = getFormFields(form)
    api.ajax({action: this.action, formData})
      .then(this.res.bind(event.target))
      .catch(this.err.bind(event.target))
  } else {
    event.target.classList.add('is-invalid')
    event.target.classList.add('was-validated')
  }
}

const forms = function () {
}

forms.addForm = function (data) {
  this[data.name] = new Form(data)
}

const onSignIn = res => {
  store.user = res.user
  navigationHandler.setCurrentPage('menu')
}
const onSignOut = () => {
  store.user = {}
  navigationHandler.goBackPage()
}
const invalid = function (res) {
  $('#' + this.id).find('.password').val('')
  this.classList.add('is-invalid')
  this.classList.add('was-validated')
}
const onChangePassword = function (res)

forms.addForm({name: 'signIn', action: 'sign-in', res: onSignIn, err: invalid})
forms.addForm({name: 'signUp', action: 'sign-up', err: invalid})
forms.addForm({name: 'changePassword', action: 'change-password', res: onChangePassword err: invalid})
forms.addForm({name: 'signOut', action: 'sign-out', res: onSignOut})

navigationHandler.setCurrentPage('sign-in')

module.exports = forms
