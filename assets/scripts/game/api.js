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

api.updateGame = function (i, turn, overInput, id) {
  const sym = turn ? 'x' : 'o'
  return api.ajax({
    method: 'PATCH',
    url: ('games/' + id),
    data: {
      game: {
        cell: {
          index: i,
          value: sym
        },
        over: overInput
      }
    },
    auth: true
  })
}

api.getStats = function () {
  return api.ajax({
    method: 'GET',
    url: ('games?over=true'),
    auth: true
  })
}

module.exports = api
