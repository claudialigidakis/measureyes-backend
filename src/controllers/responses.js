const responsesModel = require('../models/responses')

function createResponse(req, res, next) {
  if (!req.body) {
    return next({status: 400, message: 'Missing responses'})
  }
  responsesModel.createResponse(req.params.video_id, req.body)
  .then(function(data) {
    return res.status(201).send({data})
  }).catch(next)
}

module.exports = {
  createResponse
}
