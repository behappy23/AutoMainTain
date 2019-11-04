'use strict'
const getFormfields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onAddCar = function (event) {
  event.preventDefault()
  // console.log('events working')
  // console.log(event)
  const form = event.target
  const formData = getFormfields(form)
  api.addCar(formData)
    .then(ui.onAddCarSuccess)
    .catch(ui.onAddCarFailure)
}
// const onViewCar = function () {
const onViewCar = function (event) {
  event.preventDefault()
  // console.log('events working')
  // console.log(event)
  api.viewCar(event)
    .then(ui.onViewCarSuccess)
    .catch(ui.onViewCarFailure)
}
const onCars = function (responseData) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)
}
const onDeleteVehicle = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormfields(form)
  api.deleteVehicle(formData)
    .then(ui.onDeleteCarSuccess)
    .catch(ui.onDeleteCarFailure)
}
const onChangeVin = function (event) {
  // console.log('Vin working')
  event.preventDefault()
  // console.log('Vin workingsss')
  // const form = event.target
  // const formData = getFormfields(form)
  const id = $('#carID').val()
  // console.log(id)
  const vin = $('#carVin').val()
  api.changeVin(id, vin)
    .then(ui.onChangeVinSuccess)
    .catch(ui.onChangeVinFailure)
}
module.exports = {
  onAddCar,
  onViewCar,
  onCars,
  onDeleteVehicle,
  onChangeVin
}
