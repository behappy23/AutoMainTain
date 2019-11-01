'use strict'
const authEvents = require('./auth/events.js')
const carEvents = require('./cars/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

// on page load
$(() => {
  // your JS code goes here

  // hide forms we dont want until they sign in
  $('#change-password').hide()
  $('#add-car').hide()
  $('#sign-out').hide()
  $('#view-car').hide()
  $('#carHTML').hide()
  $('#carTable').hide()
  $('#view-car_table').hide()
  $('#changeVin').hide()
  $('#deleteRow').hide()

  // set click events for page
  $('#add-car').on('submit', carEvents.onAddCar)
  $('#carHTML').on('click', carEvents.onViewCar)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#changeVin').on('submit', carEvents.onChangeVin)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#deleteRow').on('submit', carEvents.onDeleteVehicle)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#cars-display').html('')
  $('#signout').hide()

  // ('#create-example') selects the create-example form on the page
  // the rest says: I want to listen for the submit event
  // nd then call exampleEvents.onCreateExample whenever the form is submitted
  // $('#create-example').on('submit', exampleEvents.onCreateExample)
})
