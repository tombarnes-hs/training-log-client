'use strict'
// Event Handlers for Workout Log events
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateWorkout = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createWorkout(data)
    .then(ui.createSuccess)
    .catch(ui.failure)
}

const onViewWorkouts = function (event) {
  event.preventDefault()
  api.viewWorkouts()
    .then(ui.viewWorkouts)
}

module.exports = {
  onCreateWorkout,
  onViewWorkouts
}
