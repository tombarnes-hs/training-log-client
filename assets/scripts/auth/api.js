'use strict'

const config = require('../config.js')
const store = require('../store.js')

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

const changePassword = function (passwordData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: passwordData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword
}
