'use strict'
const getFormfields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onAddpart = function (event) {
  event.preventDefault()
  // console.log('events working')
  // console.log(event)
  const form = event.target
  const formData = getFormfields(form)
  api.addpart(formData)
    .then(ui.onAddpartSuccess)
    .catch(ui.onAddpartFailure)
}
// const onViewpart = function () {
const onViewpart = function (event) {
  event.preventDefault()
  // console.log('events working')
  // console.log(event)
  api.viewpart(event)
    .then(ui.onViewpartSuccess)
    .catch(ui.onViewpartFailure)
}
const onParts = function (responseData) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)
}
const onDeletePart = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormfields(form)
  api.deleteVehicle(formData)
    .then(ui.onDeletePartSuccess)
    .catch(ui.onDeletePartFailure)
}
const onChangePart = function (event) {
  // console.log('Vin working')
  event.preventDefault()
  // console.log('Vin workingsss')
  // const form = event.target
  // const formData = getFormfields(form)
  const id = $('#partID').val()
  // console.log(id)
  const type = $('#partType').val()
  api.changeVin(id, type)
    .then(ui.onChangeVinSuccess)
    .catch(ui.onChangeVinFailure)
}
module.exports = {
  onAddpart,
  onViewpart,
  onParts,
  onDeletePart,
  onChangePart
}
