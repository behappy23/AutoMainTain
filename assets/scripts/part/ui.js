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
const onAddPartSuccess = function () {
  successMessage('part Added Successfully')
  // console.log('part Added Successfully')
  $('.parts').text('')
  $('#add-part').trigger('reset')
}
const onAddPartFailure = function () {
  failureMessage('part failed to add')
  console.log('part failed')
  // $('.parts').text('')
}

const onChangePartSuccess = function () {
  successMessage('Changed Part successfully!')
  // console.log('Vin Changed Successfully')
  $('#partTable').html('')
  $('#changePart').trigger('reset')
}

const onViewPartSuccess = function (responseData) {
  // console.log(maintenanceRecord)
  console.log(responseData)
  $('#partTable').html('')
  // $('#viewpart').trigger('reset')
  // successMessage(maintenanceRecord.make)
  // store.parts = maintenanceRecord.parts
  // loop through API response data
  responseData.parts.forEach(part => {
  // build HTML element with data
    const partHTML = (`
    <tr>
      <th>Id: ${part.id}</th>
      <th>Type: ${part.Type}</th>
      <th>PartNumber: ${part.PartNumber}</th>
    </tr>
   `)

    // append partHTML to our part-display element
    $('#partTable').append(partHTML)
  })
}
const onDeletePartSuccess = function () {
  successMessage('Part Deleted successfully')
  // console.log('part Added Successfully')
  $('.parts').text('')
  $('#partTable').html('')
}
const onDeletePartFailure = function () {
  successMessage('Part Deleted successfully')
  failureMessage('Please Enter a Valid part ID')
  // console.log('part failed delete')
  $('.parts').text('')
  $('#partTable').html('')
}

module.exports = {
  onAddPartSuccess,
  failureMessage,
  successMessage,
  onViewPartSuccess,
  onDeletePartSuccess,
  onChangePartSuccess,
  onAddPartFailure,
  onDeletePartFailure
}
