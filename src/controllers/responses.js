const responsesModel = require('../models/responses')

function getOneResponse(req, res, next) {
  if (!req.params.response_id) {
    return next({status: 400, message: 'Bad Request'})
  }
  responsesModel.getOneResponse(req.params.response_id)
  .then(data => {
    res.status(200).send({data})
  }).catch(next)
}

function getAllResponses(req, res, next){
  responsesModel.getAllResponses()
  .then(data => {
    res.status(200).send({data})
  })
  .catch(next)
}

function createResponse(req, res, next) {
  if (!req.body) {
    return next({status: 400, message: 'Missing responses'})
  }
  responsesModel.createResponse(req.params.video_id, req.body.processed_data)
  .then(function(data) {
    return res.status(201).send({data})
  }).catch(next)
}

function updateResponse(req, res, next) {
  responsesModel.updateResponse(parseInt(req.params.response_id), req.body.time, req.body.faces, req.body.persons)
  .then(data => {
    res.status(200).send({ data });
  })
  .catch(next);
}

function removeResponse(req, res, next) {
  responsesModel.removeResponse(parseInt(req.params.response_id))
  .then(function(data) {
    res.status(200).send({data})
  })
  .catch(next)
}

module.exports = {
  getOneResponse,
  getAllResponses,
  createResponse,
  updateResponse,
  removeResponse
}
