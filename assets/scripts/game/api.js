'use strict'

const Api = require('../interface/Api')

const api = new Api()

api.createGame = function () {
  return api.ajax({
    method: 'POST',
    url: 'games',
    data: '{}',
    auth: true
  })
}

module.exports = api
