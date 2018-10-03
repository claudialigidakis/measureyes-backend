const knex = require('../../db')
const bcrypt = require('bcrypt-as-promised')

function getOneVideo(video_id) {
  return (knex('video').where({id: video_id}))
  .then(videos => {
    const promises = videos.map(video => {
      return knex('responses')
      .where('responses.video_id', video_id)
      .then(response => {
        video.responses = response
        return video
      })
    })
    return Promise.all(promises)
  })
}

function createVideo(location_id, body) {
    let video_name = body.video_name
    return (knex('video').insert({locations_id: location_id, video_name}).returning('*'))
}

function updateVideo(video_id, video_name) {
  return (knex('video').update({video_name: video_name}).where({id: video_id}).returning('*'))
}

function removeVideo(video_id) {
  return (knex('video').where({id: video_id}).del())
}



module.exports = {
  getOneVideo,
  createVideo,
  updateVideo,
  removeVideo
}
