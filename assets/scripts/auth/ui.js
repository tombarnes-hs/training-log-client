'use strict'

const store = require('../store.js')

// elements to hide on initial load
$('#change-password-form').hide()
$('#sign-out-button').hide()
$('#sign-up-form').hide()
$('#create-workout-form').hide()
$('#view-all-workouts').hide()
$('#create-workout-button').hide()
$('#update-success-message').hide()
$('#delete-success-message').hide()
$('#user-bar').hide()
$('#view-empty-message').hide()
// Show register new user form when button is clicked
const registerNewuser = function () {
  $('#sign-up-form').show()
  $('#sign-in-form').hide()
  $('#sign-in-form').trigger('reset')
  $('#sign-up-button').hide()
}

// Messages for user indicating success of failure during auth processes
const signUpSuccess = function () {
  // fill empty html with text and style
  $('#display-message').html('Sign up successful! Please login with your new credentials.')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').show()
  $('#sign-up-form').hide()
}

// Messages for user indicating success of failure during auth processes
const signUpFailure = function () {
  // fill empty html with text and style
  $('#display-message').html('Sign up failed. Double check your passwords or try logging in.')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').show()
}

const signInSuccess = function (response) {
  // fill empty display-message elements with with text and style
  $('#display-message').html('Sign in successful')
  $('#display-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  // store user info including token
  store.user = response.user
  // hide and/or show html elements according to visual flow
  $('#sign-in-form').hide()
  $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-out-button').show()
  $('#sign-up-button').hide()
  $('#view-all-workouts').show()
  $('#create-workout-button').show()
  $('.container').hide()
  $('#user-bar').show()
}
//
const signOutSuccess = function () {
  // fill empty html with text and style
  $('#display-message').html('Sign out successful. Sign in to view your data.')
  $('#display-message').css('color', 'green')
  $('#sign-out-button').trigger('reset')
  $('#sign-in-form').show()
  $('#sign-out-button').hide()
  $('#change-password-form').hide()
  $('#create-workout-form').hide()
  $('#view-all-workouts').hide()
  $('#sign-up-button').show()
  $('.workout').hide()
  $('#create-workout-button').hide()
  $('.container').show()
  $('#user-bar').hide()
  $('#create-workout-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const changePasswordSuccess = function () {
  // fill empty html with text and style
  $('#display-message').html('Password change successful. Sign in with new password please')
  $('#display-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
  // hide and/or show html elements according to visual flow
  $('#change-password-form').hide()
  $('#sign-out-button').hide()
  $('#sign-in-form').show()
  $('#create-workout-form').hide()
  $('#view-all-workouts').hide()
  $('.workout').hide()
  $('#create-workout-button').hide()
  $('.container').show()
  $('#user-bar').hide()
}

const failure = function () {
  $('#display-message').html('Something went wrong. Make sure you are using the correct password and username.')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

const changeFailure = function () {
  $('#change-fail-message').html('Invalid password.')
  $('#display-message').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
}

module.exports = {
  registerNewuser,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure,
  signUpFailure,
  changeFailure
}
