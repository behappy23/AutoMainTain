'use strict'
const authEvents = require('./auth/events.js')
const carEvents = require('./cars/events.js')
const partEvents = require('./part/events.js')

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
  $('#deleteRowPart').hide()
  $('#deleteRow').hide()
  $('#add-part').hide()
  $('#partHTML').hide()
  $('#changePart').hide()
  $('#partTable').hide()

  // set click events for page
  // Add Car Events
  $('#add-car').on('submit', carEvents.onAddCar)
  $('#carHTML').on('click', carEvents.onViewCar)
  $('#changeVin').on('submit', carEvents.onChangeVin)
  $('#deleteRow').on('submit', carEvents.onDeleteVehicle)
  $('#cars-display').html('')

  // Authorization Events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#signout').hide()

  // Part Events
  $('#add-part').on('submit', partEvents.onAddPart)
  $('#partHTML').on('click', partEvents.onViewPart)
  $('#changePart').on('submit', partEvents.onChangePart)
  $('#deleteRowPart').on('submit', partEvents.onDeletePart)
  $('#part-display').html('')

  // $('#changeVin').on('submit', carEvents.onChangeVin)
  // $('#change-password').on('submit', authEvents.onChangePassword)
  // $('#deleteRow').on('submit', carEvents.onDeleteVehicle)
  // $('#sign-out').on('submit', authEvents.onSignOut)
  // $('#cars-display').html('')
  // $('#signout').hide()
  // ('#create-example') selects the create-example form on the page
  // the rest says: I want to listen for the submit event
  // nd then call exampleEvents.onCreateExample whenever the form is submitted
  // $('#create-example').on('submit', exampleEvents.onCreateExample)
})
