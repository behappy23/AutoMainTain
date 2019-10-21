'use strict'
const config = require('../config')
//
// // require `store` so we have access to our `token`
// // so the API knows who we are
const store = require('../store')
//

const addCar = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + `/cars/${store.cars.id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'make': {
        'model': {
          'year': {
            'vin ': {
            }
          }
        }
      }
    }
  })
}

module.exports = {
  addCar
}
