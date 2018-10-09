exports.seed = function(knex, Promise) {
  return knex('video').del()
    .then(function () {
      return knex('video').insert([
        {id: 1, locations_id: 1, video_name: 'Left'},
        {id: 2, locations_id: 1, video_name: 'Right'},
        {id: 3, locations_id: 2, video_name: 'Left'}
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('video_id_seq', (SELECT MAX(id) FROM video));"
      );
    });
};
