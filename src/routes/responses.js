const express = require('express')
const router = express.Router()
const responsesController = require('../controllers/responses')

router.get('/', responsesController.getAllResponses)
router.get('/:response_id', responsesController.getOneResponse)
router.post('/:video_id', responsesController.createResponse)
router.put('/:response_id', responsesController.updateResponse)
router.delete('/:response_id', responsesController.removeResponse)

module.exports = router
