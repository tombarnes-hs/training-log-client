'use strict'

const config = require('../config.js')

// sign up Ajax call
const signUp = function (userData) {
  return $.ajax({
    // http://localhost:4741/sign-up or // https://frozen-sierra-35636.herokuapp.com/sign-up
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: userData
  })
}

const signIn = function (userData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: userData
  })
}

module.exports = {
  signUp,
  signIn
}
