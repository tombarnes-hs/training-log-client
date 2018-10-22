'use strict'
// UI events after workout log
const store = require('../store.js')

// initial load state
$('#create-workout-form').hide()
$('#create-success-message').hide()

// visual flow for resource CRUD
const createSuccess = function () {
  $('#create-workout-form').trigger('reset')
  $('#create-workout-form').hide()
  $('#create-success-message').show()
}

const viewWorkouts = function (response) {
  store.log = response
  console.log(store.log)
  for (let i = 0; i < store.log.workouts.length; i++) {
    console.log('yes')
    $('#workout-log').append(`${store.log.workouts[i].date} and ${store.log.workouts[i].elapsed_time} and ${store.log.workouts[i].average_watts} and ${store.log.workouts[i].average_hr} and ${store.log.workouts[i].pre_fatigue} and ${store.log.workouts[i].post_fatigue} and ${store.log.workouts[i].notes} _______ / _______ `)
  }
}

module.exports = {
  createSuccess,
  viewWorkouts
}
