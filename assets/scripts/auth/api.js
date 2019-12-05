'use strict'

const Api = require('../interface/Api')

const api = new Api()

/**
 * Convert Data from user action into ajax format
 * @param  {String} action name of the API action
 * @param  {Object} data   Form Data from user
 * @return {Promise}        Promise the gives the user an auth key if credentails are correct
 */
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
      break
  }
  return this.ajax(ajaxArgs)
}

module.exports = api
