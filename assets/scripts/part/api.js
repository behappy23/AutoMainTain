'use strict'
const config = require('../config')
//
// // require `store` so we have access to our `token`
// // so the API knows who we are
const store = require('../store')
//

// const addpart = function (make, model, year, vin) {
const addpart = function (formData) {
  console.log(formData.part.Type)
  return $.ajax({
    method: 'POST',
    // url: config.apiUrl + `/parts/${store.parts.id}`,
    url: config.apiUrl + `/parts/`,
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token

    }
  })
}

const viewpart = function () {
  return $.ajax({
    method: 'GET',
    // url: config.apiUrl + `/parts/${store.parts.id}`,
    url: config.apiUrl + `/parts`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const changePart = function (id, type) {
  console.log(id)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/parts/${id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'part': {
        'type': type
      }
    }
  })
}
const deletePart = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/parts/${formData.part.id}`,
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
module.exports = {
  addpart,
  viewpart,
  deletePart,
  changePart
}
