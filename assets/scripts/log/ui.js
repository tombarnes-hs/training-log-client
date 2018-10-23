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
  console.log(response)
  // store.log = response
  const showWorkoutsHtml = showWorkoutsTemplate({ workouts: response.workouts })
  console.log(response)
  $('.workout-log').html(showWorkoutsHtml)
  // console.log(store.log.workouts)
  // for (let i = 0; i < store.log.workouts.length; i++) {
  // $('#workout-log').append(`Date: ${store.log.workouts[i].date}, Workout Time(minutes): ${store.log.workouts[i].elapsed_time}, Average Watts: ${store.log.workouts[i].average_watts}, Average Heart Rate(bpm): ${store.log.workouts[i].average_hr}, Pre-Workout Fatigue(1-10): ${store.log.workouts[i].pre_fatigue}, Post-Workout Fatigue(1-10)${store.log.workouts[i].post_fatigue}, Workout Notes: ${store.log.workouts[i].notes} <br><br><form class="update-form"><p>Update notes in field below</p><br><button data-id="${store.log.workouts[i].id}" type="submit" class="btn btn-secondary btn-sm"> Update Notes </button> <br><br> <input type="text" class="form-control form-control-sm" name="workout[notes]" placeholder="Update Notes Here"></form> <br><br><button id="delete-workout" type="button" class="btn btn-secondary btn-sm"> Delete Workout </button><hr>`)
}

module.exports = {
  createSuccess,
  viewWorkouts
}
