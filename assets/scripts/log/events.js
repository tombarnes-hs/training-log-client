'use strict'
// Event Handlers for Workout Log events
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')

const onCreateWorkout = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createWorkout(data)
}

module.exports = {
  onCreateWorkout
}
