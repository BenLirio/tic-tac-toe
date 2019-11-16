'use strict'

const config = require('../config')
const store = require('../store')

// Convert Data to request

// Request from the ajax server

const ajax = (data) => {
  const url = config.apiUrl + '/' + data.id
  let method = ''
  let auth = false
  let headers = null
  switch (data.id) {
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
  return $.ajax({url, method, headers, data: data.formData})
}

module.exports = {
  ajax
}
