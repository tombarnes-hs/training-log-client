'use strict'
// Event Handlers for Workout Log events
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

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

const onUpdateNotes = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.id = $(event.target).data('id')
  console.log(store.id)
  api.updateWorkout(data)
    .then()
    .catch()
}

module.exports = {
  onCreateWorkout,
  onViewWorkouts,
  onUpdateNotes
}
