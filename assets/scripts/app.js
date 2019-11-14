'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const boardEvents = require('./board/events')
const boardState = require('./board/state')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  boardState.init()
  boardEvents.addHandlers()
})
