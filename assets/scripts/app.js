'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Event Listeners for Auth
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
})
