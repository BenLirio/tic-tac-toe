
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')
const pages = require('../navigation/pages')
// customError
// patternMismatch
// rangeOverflow
// rangeUnderflow
// stepMismatch
// tooLong
// typeMismatch
// valueMissing
// valid

const FormEvent = function (params) {
  this.res = console.log
  this.err = console.log
  Object.assign(this, params)
}
const formEvents = {}
// GO TO A PAGE function

// Initialize the form events
const initializeForm = function () {
  if (this.querySelector('.form-control')) {
    const button = this.querySelector('.btn')
    button.classList.add('disabled')
    button.setAttribute('disabled', 'true')
  }

  const res = function (data) {
    Object.assign(store, data)
    if (this.getAttribute('next-page')) {
      pages.setPage(this)
    }
    if (this.getAttribute('set-valid')) {
      this.querySelectorAll('input[type="password"]').forEach(input => {
        input.value = ''
        input.placeholder = 'Password Changed'
        input.classList.add('is-valid')
      })
    }
  }.bind(this)
  const err = function (data) {
    this.querySelectorAll('input[type="password"]').forEach(input => {
      input.value = ''
      input.classList.add('is-invalid')
    })
  }.bind(this)
  formEvents[this.id] = new FormEvent({res, err})
}
$('form').each(initializeForm)

const submit = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  const id = form.id
  api.ajax({id, formData})
    .then(formEvents[form.id].res)
    .catch(formEvents[form.id].err)
}

// Every time the form is changed
const checkValidity = function (event) {
  // this = form
  // check if the form is valid HTML client side
  this.querySelectorAll('input[type="password"]').forEach(input => {
    input.classList.remove('is-invalid')
  })
  if (this.checkValidity()) {
    // form is valid acording to client

    // set let the button be valid
    const button = this.querySelector('.btn')
    button.classList.remove('disabled')
    button.removeAttribute('disabled')
  } else {
    // form is invalid acording to client

    // set the button
    const button = this.querySelector('.btn')
    button.classList.add('disabled')
    button.setAttribute('disabled', 'true')
  }
}


module.exports = {
  checkValidity,
  submit
}
