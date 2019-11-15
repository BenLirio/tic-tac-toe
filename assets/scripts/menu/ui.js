'use strict'

const pages = require('../navigation/pages')
// I will use an ID to refer to a pages
// Get all the pages based on html
// Set what each state should show
// Hide all then show only what is needed
const setGamePage = () => {
  pages.setCurrentPage('game')
}

module.exports = {
  setGamePage
}
