'use strict'

const Ui = require('../interface/Ui')

const ui = new Ui()

ui.showPageByEvent = function (event) {
  const button = event.target
  const id = button.getAttribute('data-set-page')
  ui.showPageById(id)
}

module.exports = ui
