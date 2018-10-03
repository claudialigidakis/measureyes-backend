const accountModel = require('../models/accounts')

function getOneAccount(req, res, next) {
  if (!req.params.account_id) {
    return next({status: 400, message: 'Bad Request'})
  }
  accountModel.getOneAccount(req.params.account_id)
  .then(data => {
    delete data.password
    res.status(200).send({data})
  }).catch(next)
}

function getAllAccounts(req, res, next){
  accountModel.getAllAccounts()
  .then(data => {
    delete data.password
    res.status(200).send({data})
  })
  .catch(next)
}

function createAccount(req, res, next) {
  if (!req.body.email) {
    return next({status: 400, message: 'Missing account creation fields'})
  }
  accountModel.createAccount(req.body)
  .then(function(data) {
    delete data.password
    return res.status(201).send({data})
  }).catch(next)
}

function updateAccount(req, res, next) {
  accountModel.updateAccount(parseInt(req.params.account_id), req.body.store_name, req.body.first_name, req.body.last_name, req.body.email)
  .then(data => {
    delete data.password
    res.status(200).send({ data });
  })
  .catch(next);
}

function removeAccount(req, res, next) {
  accountModel.removeAccount(parseInt(req.params.account_id))
  .then(function(data) {
    res.status(200).send({data})
  })
  .catch(next)
}

//staff routes

function getOneLocation(req, res, next) {
  if (!req.params.account_id || !req.params.location_id) {
    return next({status: 400, message: 'No account ID or location Id'})
  }
  accountModel.getOneLocation(req.params.account_id, req.params.location_id)
  .then(data => {
    res.status(200).send({data})
  })
  .catch(next)
}

function getAllLocations(req, res, next) {
  if (!req.params.account_id) {
    return next({status: 400, message: "No account id"})
  }
  accountModel.getAllLocations(req.params.account_id)
  .then(data => {
    res.status(200).send({data})
  })
  .catch(next)
}

function createLocation(req, res, next) {
  if (!req.params.account_id || !req.body.address) {
    return next({status: 400, message: 'Need proper location inputs'})
  }
  accountModel.createLocation(req.body, parseInt(req.params.account_id))
  .then(data => {
    res.status(201).send({data})
  })
  .catch(next)
}

function updateLocation(req, res, next) {
  if (!req.body.address) {
    return next({ status: 400, message: 'Bad request'});
  }
  accountModel.updateLocation(parseInt(req.params.location_id), req.body.address)
  .then(data => {
    res.status(200).send({ data });
  })
  .catch(next);
}

function removeLocation(req, res, next) {
  if (!req.params.location_id) {
    return next({status: 400, message: 'Missing location'})
  }
  accountModel.removeLocation(parseInt(req.params.location_id))
  .then(function(data) {
    res.status(200).send({data})
  }).catch(next)
}

module.exports = {
  getAllAccounts,
  getOneAccount,
  createAccount,
  removeAccount,
  updateAccount,
  getAllLocations,
  getOneLocation,
  createLocation,
  updateLocation,
  removeLocation
}
