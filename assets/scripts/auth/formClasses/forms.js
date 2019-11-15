'use strict'

const store = require('../../store')
const api = require('../api')
const getFormFields = require('../../../../lib/get-form-fields')

const Form = function (data) {
  this.action = data.action
  this.res = data.res || console.log
  this.err = data.err || console.log
}

Form.prototype.submit = function (event) {
  console.log(this.action)
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.ajax({action: this.action, formData})
    .then(this.res)
    .catch(this.err)
}

const FormFactory = function () {
}

FormFactory.prototype.addForm = function (data) {
  this[data.name] = new Form(data)
}

const forms = new FormFactory()

const setUser = res => {
  store.user = res.user
}
const deleteUser = () => {
  store.user = {}
}

forms.addForm({name: 'signIn', action: 'sign-in', res: setUser})
forms.addForm({name: 'signUp', action: 'sign-up'})
forms.addForm({name: 'changePassword', action: 'change-password'})
forms.addForm({name: 'signOut', action: 'sign-out', res: deleteUser})

module.exports = forms
