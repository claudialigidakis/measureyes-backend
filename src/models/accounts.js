const knex = require('../../db')
const bcrypt = require('bcrypt-as-promised')

function getAccountbyEmail(email) {
  return (knex('accounts').where({email: email}).first())
}

function getOneAccount(account_id) {
  return (knex('accounts').where({id: account_id}).first())
}

function getAllAccounts() {
  return (knex('accounts'))
}

function createAccount(body) {
  let store_name = body.store_name
  let first_name = body.first_name
  let last_name = body.last_name
  let email = body.email
  return getAccountbyEmail(email).then(data => {
    if (data)
      throw {
        status : 400,
        message: 'account email exists'
      }
    return bcrypt.hash(body.password, 10)
  }).then(newPassword => {
    return(knex('accounts').insert({store_name, first_name, last_name, email, password: newPassword}).returning('*'))
  })
}

const updateAccount = async (account_id, store_name, first_name, last_name, email) => {
  if (email) {
    const checkEmail = await getAccountbyEmail(email)
    if (typeof checkEmail === 'object') {
      throw {
        status : 400,
        message: 'Account email exists'
      }
    }
  }
  const toUpdate = {}
  store_name
    ? toUpdate.store_name = store_name
    : null
  first_name
    ? toUpdate.first_name = first_name
    : null
  last_name
    ? toUpdate.last_name = last_name
    : null
  email
    ? toUpdate.email = email
    : null
  return (knex('accounts').update(toUpdate).where({id: account_id}).returning('*'))
}

function removeAccount(account_id) {
  return (knex('locations').where({account_id: account_id}).del()).then(data => {
    return (knex('accounts').where({id: account_id}).del())
  })
}

////////////////////////////////////////////////////////////////////////////////
//Location ROUTING
////////////////////////////////////////////////////////////////////////////////
function getOneLocation(account_id, location_id) {
  return (knex('locations').where({id: location_id, account_id: account_id}))
  .then(locations => {
    const promises = locations.map(location => {
      return knex('video')
      .where('locations_id', location_id)
      .then(video => {
        location.videos = video
        return location
      })
    })
    return Promise.all(promises)
  })
}

function getAllLocations(account_id) {
  return (knex('locations').where({account_id: account_id}))
}

function createLocation(body, account_id) {
  return (knex('locations').insert({account_id: account_id, address: body.address}).returning('*'))
}

function updateLocation (location_id, address) {
  return (knex('locations').update({address: address}).where({id: location_id}).returning('*'))
}

function removeLocation(location_id) {
  return (knex('locations').where({id: location_id}).del())
}

module.exports = {
  getAccountbyEmail,
  getOneAccount,
  getAllAccounts,
  createAccount,
  updateAccount,
  removeAccount,
  getOneLocation,
  getAllLocations,
  createLocation,
  updateLocation,
  removeLocation
}
