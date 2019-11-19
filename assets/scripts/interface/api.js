'use strict'

const config = require('../config')
const store = require('../store')

const Api = function () {
}

Api.prototype.ajax = function (params) {
  // url
  // method
  // data
  // headers
  // auth
  const requestMeta = {}
  requestMeta.url = config.apiUrl + '/' + params.url
  requestMeta.method = params.method
  if (params.data) {
    requestMeta.data = params.data
  }
  if (params.auth) {
    requestMeta.headers = {
      Authorization: `Token token=${store.user.token}`
    }
  }
  return $.ajax(requestMeta)
}

module.exports = Api
