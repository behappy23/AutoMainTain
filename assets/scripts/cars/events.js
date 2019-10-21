'use strict'
const api = require('./api')
const ui = require('./ui')

const addCar = function (event) {
  event.preventDefault()
  console.log('events working')
  console.log(event)
  api.addcar(event)
    .then(ui.onAddCarSuccess)
    .catch(ui.onAddCarFailure)
}
module.exports = {
  addCar
}
