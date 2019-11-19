'use strict'

const EventHandler = require('../interface/EventHandler')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const store = require('../store')
const ui = require('./ui')

const eventHandler = new EventHandler()

/**
 * Triggers when the user gets an auth response from server
 * @param  {Object} res Res object with User object inside with email and Token
 */
eventHandler.formSuccess = function (res) {
  this.reset()
  this.querySelectorAll('input').forEach(input => {
    input.classList.remove('is-invalid')
  })
  Object.assign(store, res)
  const pageId = this.dataset.setPage
  ui.showPageById(pageId)
  $('.auth-alert').show()
  setTimeout(() => {
    $('.auth-alert').hide()
  }, 3000)
}

/**
 * Triggers when the users credentails are rejected by server
 * @param  {object} err err object with the type of error
 */
eventHandler.formFailure = function (err) {
  this.reset()
  this.querySelectorAll('input').forEach(input => {
    input.classList.add('is-invalid')
  })
  console.log(err)
}

/**
 * Triggers when the user submits any formFailure
 * @param  {object} event Event object with target element inside
 */
eventHandler.onSubmitForm = event => {
  event.preventDefault()
  const form = event.target
  const action = form.dataset.ajaxAction
  const data = getFormFields(form)
  api.auth(action, data)
    .then(eventHandler.formSuccess.bind(form))
    .catch(eventHandler.formFailure.bind(form))
}

/**
 * Initializes all of the events for auth
 */
eventHandler.addEvents = function () {
  $('form').on('submit', eventHandler.onSubmitForm)
  $('.auth-alert').hide()
}

module.exports = eventHandler
