const bcrypt = require('bcrypt-as-promised')
const accountsModel = require('./accounts')

function login(email, password){
  let account
  return accountsModel.getAccountbyEmail(email)
  .then(function(data){
    if(!data) throw { status: 400, message: "Bad Request"}
    account = data
    return bcrypt.compare(password, data.password)
  })
  .catch(bcrypt.MISMATCH_ERROR, function(){
    throw { status: 401, message: "Unauthorized"}
  })
  .then(function(){
    delete account.password
    return account
  })
}

module.exports = {
  login
}
