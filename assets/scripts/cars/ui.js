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
  successMessage('Car Added Successfully')
  // console.log('Car Added Successfully')
  $('.cars').text('')
  $('#add-car').trigger('reset')
}
const onAddCarFailure = function () {
  failureMessage('Car failed to add')
  console.log('Car failed')
  // $('.cars').text('')
}

const onChangeVinSuccess = function () {
  successMessage('Changed Vin successfully!')
  // console.log('Vin Changed Successfully')
  $('#carTable').html('')
  $('#changeVin').trigger('reset')
}

const onViewCarSuccess = function (responseData) {
  // console.log(maintenanceRecord)
  console.log(responseData)
  $('#carTable').html('')
  // $('#viewCar').trigger('reset')
  // successMessage(maintenanceRecord.make)
  // store.cars = maintenanceRecord.cars
  // loop through API response data
  responseData.cars.forEach(car => {
  // build HTML element with data
    const carHTML = (`
    <tr>
      <th>Id: ${car.id}</th>
      <th>Make: ${car.make}</th>
      <th>Model: ${car.model}</th>
      <th>Year: ${car.year}</th>
      <th>Vin: ${car.vin}</th>
    </tr>
   `)

    // append carHTML to our car-display element
    $('#carTable').append(carHTML)
  })
}
const onDeleteCarSuccess = function () {
  successMessage('Car Deleted successfully')
  // console.log('Car Added Successfully')
  $('.cars').text('')
  $('#carTable').html('')
}
const onDeleteVehicleFailure = function () {
  successMessage('Vehicle Deleted successfully')
  failureMessage('Please Enter a Valid Car ID')
  // console.log('Car failed delete')
  $('.cars').text('')
  $('#carTable').html('')
}

module.exports = {
  onAddCarSuccess,
  failureMessage,
  successMessage,
  onViewCarSuccess,
  onDeleteCarSuccess,
  onChangeVinSuccess,
  onAddCarFailure,
  onDeleteVehicleFailure
}
