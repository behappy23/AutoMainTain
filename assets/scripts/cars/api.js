'use strict'
const config = require('../config')
//
// // require `store` so we have access to our `token`
// // so the API knows who we are
const store = require('../store')
//

// const addCar = function (make, model, year, vin) {
const addCar = function (formData) {
  console.log(formData.car.make)
  return $.ajax({
    method: 'POST',
    // url: config.apiUrl + `/cars/${store.cars.id}`,
    url: config.apiUrl + `/cars/`,
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token

    }
  })
}

const viewCar = function () {
  return $.ajax({
    method: 'GET',
    // url: config.apiUrl + `/cars/${store.cars.id}`,
    url: config.apiUrl + `/cars`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const changeVin = function (id, vin) {
  console.log(id)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/cars/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'car': {
        'vin': vin
      }
    }
  })
}
const deleteVehicle = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/cars/${formData.car.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
module.exports = {
  addCar,
  viewCar,
  deleteVehicle,
  changeVin
}
