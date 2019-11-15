'use strict'

const config = require('../config')
const store = require('../store')

const ajax = ({name, data}) => {
  const url = config.apiUrl + '/' + name
  let method = ''
  let auth = false
  let headers = null
  switch (name) {
    case 'sign-up':
      method = 'POST'
      break
    case 'sign-in':
      method = 'POST'
      break
    case 'change-password':
      method = 'PATCH'
      auth = true
      break
    case 'sign-out':
      method = 'DELETE'
      auth = true
      break
  }
  if (auth) {
    headers = {
      Authorization: `Token token=${store.user.token}`
    }
  }
  return $.ajax({url, method, headers, data})
}

module.exports = {
  ajax
}
