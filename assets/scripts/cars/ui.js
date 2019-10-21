'use strict'
// const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}
const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}
const onAddCarSuccess = function () {
  successMessage('Car Added')
  console.log('Car Added Successfully')
  $('.cars').text('')
}

module.exports = {
  onAddCarSuccess,
  failureMessage,
  successMessage
}
