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
const onChangeVinSuccess = function () {
  successMessage('Changed Vin successfully!')
  console.log('Vin Changed Successfully')
  $('#carTable').html('')
}

const onViewCarSuccess = function (responseData) {
  // console.log(maintenanceRecord)
  console.log(responseData)
  $('#carTable').html('')
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
  successMessage('Car Deleted')
  console.log('Car Added Successfully')
  $('.cars').text('')
}

module.exports = {
  onAddCarSuccess,
  failureMessage,
  successMessage,
  onViewCarSuccess,
  onDeleteCarSuccess,
  onChangeVinSuccess
}
