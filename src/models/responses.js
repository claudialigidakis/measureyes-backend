const knex = require('../../db')
const bcrypt = require('bcrypt-as-promised')

function getOneResponse(response_id) {
  return (knex('responses').where({id: response_id}).first())
}

function getAllResponses() {
  return (knex('responses'))
}

function createResponse(video_id, processed_data) {
  const mappedObj = processed_data.map(ele => {
    let unix_time = ele.ts
    let faces = ele.faces
    let persons = ele.persons
    return (
      knex('responses').insert({video_id, unix_time, faces, persons}).returning('*')
    )
  })
  return Promise.all(mappedObj)
}

function updateResponse(response_id, unix_time, faces, persons) {
  const toUpdate = {}
  unix_time
    ? toUpdate.unix_time = unix_time
    : null
  faces
    ? toUpdate.faces = faces
    : null
  persons
    ? toUpdate.persons = persons
    : null
  return (knex('responses').update(toUpdate).where({id: response_id}).returning('*'))
}

function removeResponse(response_id) {
  return (knex('responses').where({id: response_id}).del())
}



module.exports = {
  getOneResponse,
  getAllResponses,
  createResponse,
  updateResponse,
  removeResponse
}
