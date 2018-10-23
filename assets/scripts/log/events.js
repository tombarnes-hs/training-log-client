'use strict'
// Event Handlers for Workout Log events
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onShowCreateForm = function (event) {
  event.preventDefault()
  ui.showCreateForm()
}

const onCreateWorkout = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createWorkout(data)
    .then(ui.createSuccess)
    .catch(ui.logFailure)
}

const onViewWorkouts = function (event) {
  event.preventDefault()
  api.viewWorkouts()
    .then(ui.viewWorkoutsSuccess)
    .catch(ui.logFailure)
}

const onUpdateNotes = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  store.id = $(event.target).data('id')
  api.updateWorkout(data)
    .then(ui.updateSuccess)
    .catch(ui.logFailure)
}

const onDeleteWorkout = function (event) {
  event.preventDefault()
  store.deleteId = $(event.target).data('id')
  api.deleteWorkout()
    .then(ui.deleteSuccess)
    .catch(ui.logFailure)
}

module.exports = {
  onCreateWorkout,
  onViewWorkouts,
  onUpdateNotes,
  onDeleteWorkout,
  onShowCreateForm
}
