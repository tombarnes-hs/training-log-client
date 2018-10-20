'use strict'
// Workout resource CRUD
const config = require('../config.js')
const store = require('../store.js')

// sign up Ajax call
const createWorkout = function (workoutData) {
  console.log(workoutData)
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

module.exports = {
  createWorkout
}
