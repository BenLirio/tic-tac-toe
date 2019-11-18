'use strict'

const Api = require('../interface/Api')

const api = new Api()

api.auth = function (action, data) {
  const ajaxArgs = {}
  ajaxArgs.url = action
  ajaxArgs.data = data

  switch (action) {
    case 'sign-in':
      ajaxArgs.method = 'POST'
      ajaxArgs.auth = false
      break
    case 'sign-up':
      ajaxArgs.method = 'POST'
      ajaxArgs.auth = false
      break
    case 'change-password':
      ajaxArgs.method = 'PATCH'
      ajaxArgs.auth = true
      break
    case 'sign-out':
      ajaxArgs.method = 'DELETE'
      ajaxArgs.auth = true
      break
    default:
      console.warn('Please Enter an action for this request')
      break
  }
  return this.ajax(ajaxArgs)
}

module.exports = api
