'use strict'
// UI events after workout log
const showWorkoutsTemplate = require('../templates/workout-log.handlebars')

// initial load state
$('#create-success-message').hide()

// visual flow for resource CRUD
const createSuccess = function () {
  $('#create-workout-form').trigger('reset')
  $('#create-workout-form').hide()
  $('#create-success-message').show()
}

const viewWorkouts = function (response) {
  const showWorkoutsHtml = showWorkoutsTemplate({ workouts: response.workouts })
  $('.workout-log').html(showWorkoutsHtml)
}

module.exports = {
  createSuccess,
  viewWorkouts
}
