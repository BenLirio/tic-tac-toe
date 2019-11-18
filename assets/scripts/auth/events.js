'use strict'

const EventHandler = require('../interface/EventHandler')

const eventHandler = new EventHandler()

eventHandler.addEvents = function () {
  $('form').on('submit', )
}


// Initialize the button listeners for all forms
// Get form Data and send to api for all the form
// In the api wirte one large switch case statement for all of the possibilities
// Create a auth that can be also used for game auth
// Any file can accept any information but slim it down to what each file needs
module.exports = eventHandler
