const videoModel = require('../models/videos')

function getOneVideo(req, res, next) {
  if (!req.params.video_id) {
    return next({status: 400, message: 'Bad Request'})
  }
  videoModel.getOneVideo(req.params.video_id)
  .then(data => {
    res.status(200).send({data})
  }).catch(next)
}

function createVideo(req, res, next) {
  if (!req.body) {
    return next({status: 400, message: 'Missing responses'})
  }
  videoModel.createVideo(req.params.location_id, req.body)
  .then(function(data) {
    return res.status(201).send({data})
  }).catch(next)
}

function updateVideo(req, res, next) {
  videoModel.updateVideo(parseInt(req.params.video_id), req.body.video_name)
  .then(data => {
    res.status(200).send({ data });
  })
  .catch(next);
}

function removeVideo(req, res, next) {
  videoModel.removeVideo(parseInt(req.params.video_id))
  .then(function(data) {
    res.status(200).send({data})
  })
  .catch(next)
}

module.exports = {
  getOneVideo,
  createVideo,
  updateVideo,
  removeVideo
}
