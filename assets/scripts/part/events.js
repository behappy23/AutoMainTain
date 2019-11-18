'use strict'
const getFormfields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onAddPart = function (event) {
  event.preventDefault()
  // console.log('events working')
  // console.log(event)
  const form = event.target
  const formData = getFormfields(form)
  api.addPart(formData)
    .then(ui.onAddPartSuccess)
    .catch(ui.onAddPartFailure)
}
// const onViewpart = function () {
const onViewPart = function (event) {
  event.preventDefault()
  // console.log('events working')
  // console.log(event)
  api.viewPart(event)
    .then(ui.onViewPartSuccess)
    .catch(ui.onViewPartFailure)
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
  api.deletePart(formData)
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
  api.changePart(id, type)
    .then(ui.onChangePartSuccess)
    .catch(ui.onChangePartFailure)
}
module.exports = {
  onAddPart,
  onViewPart,
  onParts,
  onDeletePart,
  onChangePart
}
