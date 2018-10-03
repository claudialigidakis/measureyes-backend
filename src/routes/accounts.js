const express = require('express')
const router = express.Router()
const accountController = require('../controllers/accounts')

//account routes
router.get('/', accountController.getAllAccounts)
router.get('/:account_id', accountController.getOneAccount)
router.post('/', accountController.createAccount)
router.put('/:account_id', accountController.updateAccount)
router.delete('/:account_id', accountController.removeAccount)

//locations routes
router.get('/:account_id/location/:location_id', accountController.getOneLocation)
router.get('/:account_id/location', accountController.getAllLocations)
router.post('/:account_id/location', accountController.createLocation)
router.put('/:account_id/location/:location_id', accountController.updateLocation)
router.delete('/:account_id/location/:location_id', accountController.removeLocation)

module.exports = router
