'use strict'
// Workout resource CRUD
const config = require('../config.js')
const store = require('../store.js')

// sign up Ajax call
const createWorkout = function (workoutData) {
  return $.ajax({
    // http://localhost:4741 or // https://frozen-sierra-35636.herokuapp.com
    url: config.apiUrl + '/workouts',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: workoutData
  })
}

// index AJAX call
const viewWorkouts = function () {
  return $.ajax({
    // http://localhost:4741 or // https://frozen-sierra-35636.herokuapp.com
    url: config.apiUrl + `/workouts`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// patch AJAX call
const updateWorkout = function (notesData) {
  return $.ajax({
    // http://localhost:4741 or // https://frozen-sierra-35636.herokuapp.com
    url: config.apiUrl + `/workouts/${store.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: notesData
  })
}

// delete AJAX call
const deleteWorkout = function () {
  return $.ajax({
    url: config.apiUrl + `/workouts/${store.deleteId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createWorkout,
  viewWorkouts,
  updateWorkout,
  deleteWorkout
}
