const express = require('express')
const router = express.Router()
const videoController = require('../controllers/videos')

router.get('/:video_id', videoController.getOneVideo)
router.post('/:location_id', videoController.createVideo)
router.put('/:video_id', videoController.updateVideo)
router.delete('/:video_id', videoController.removeVideo)

module.exports = router
