const knex = require('../../../db')
const bcrypt = require('bcrypt-as-promised')

function getAccountbyEmail(email) {
  return (knex('accounts').where({email: email}).first())
}

module.exports = {
  getAccountbyEmail
}
