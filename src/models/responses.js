const knex = require('../../db')
const bcrypt = require('bcrypt-as-promised')

function createResponse(video_id, body) {
  let mappedObj = body.map(ele => {
    let time = ele.ts
    let faces = ele.faces
    let persons = ele.persons
    return (knex('responses').insert({video_id, time, faces, persons}).returning('*'))
  })
  return mappedObj
}

module.exports = {
  createResponse
}
