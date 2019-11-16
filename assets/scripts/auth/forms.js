
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const navigationHandler = require('../navigation/handler')
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
  const res = console.log
  const err = console.error
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
