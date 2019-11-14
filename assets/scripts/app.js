'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  console.log('js up and running')
  events.addHandlers()
})
