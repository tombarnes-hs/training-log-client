'use strict'
// UI events after workout log
const showWorkoutsTemplate = require('../templates/workout-log.handlebars')

// initial load state
$('#create-success-message').hide()
$('#update-success-message').hide()
$('#create-workout-form').hide()

// show create form
const showCreateForm = function () {
  $('#create-workout-form').show()
  $('#workout-log').hide()
}

// visual flow for resource CRUD
const createSuccess = function () {
  $('#create-workout-form').trigger('reset')
  $('#create-workout-form').hide()
  $('#create-success-message').fadeTo(2000, 500).slideUp(500, function () {
    $('#create-success-message').slideUp(500)
  })
}

const viewWorkoutsSuccess = function (response) {
  const showWorkoutsHtml = showWorkoutsTemplate({ workouts: response.workouts })
  $('.workout-log').html(showWorkoutsHtml)
  $('#workout-log').show()
  $('#create-workout-form').hide()
}

const updateSuccess = function () {
  $('#update-success-message').show()
  $('#update-success-message').fadeTo(2000, 500).slideUp(500, function () {
    $('#update-success-message').slideUp(500)
  })
  $('.update-form').trigger('reset')
}

module.exports = {
  createSuccess,
  viewWorkoutsSuccess,
  updateSuccess,
  showCreateForm
}
