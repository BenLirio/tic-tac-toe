'use strict'

const Navigation = require('./navigation')

const navigation = new Navigation()

navigation.addPage({
  name: 'sign-in',
  parent: null,
  ids: [
    'sign-in-page',
    'sign-up-page'
  ]
})
navigation.addPage({
  name: 'menu',
  parent: 'sign-in',
  ids: [
    'change-password-page',
    'sign-out-page',
    'menu-page'
  ]
})
navigation.addPage({
  name: 'game',
  parent: 'menu',
  ids: [
    'game-page'
  ]
})

module.exports = navigation
