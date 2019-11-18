'use strict'

const EventHandler = require('../interface/EventHandler')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')

const eventHandler = new EventHandler()

eventHandler.onSubmitForm = event => {
  event.preventDefault()
  const form = event.target
  const action = form.dataset.ajaxAction
  const data = getFormFields(form)
  api.auth(action, data)
}

eventHandler.addEvents = function () {
  $('form').on('submit', eventHandler.onSubmitForm)
}

// Event handler should convert the data to what the api wants
// It needs a name and it needs a data

// Initialize the button listeners for all forms
// Get form Data and send to api for all the form
// In the api wirte one large switch case statement for all of the possibilities
// Create a auth that can be also used for game auth
// Any file can accept any information but slim it down to what each file needs
module.exports = eventHandler
