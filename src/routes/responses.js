const express = require('express')
const router = express.Router()
const responsesController = require('../controllers/responses')

// router.get('/', accountController.getAllAccounts)
// router.get('/:account_id', accountController.getOneAccount)
router.post('/:video_id', responsesController.createResponse)
// router.put('/:account_id', accountController.updateAccount)
// router.delete('/:account_id', accountController.removeAccount)

module.exports = router
