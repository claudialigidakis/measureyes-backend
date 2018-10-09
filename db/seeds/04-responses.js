exports.seed = function(knex, Promise) {
  return knex('responses').del()
    .then(function () {
      return knex('responses').insert([
        {id: 1, video_id: 1, unix_time: '1539115352', faces: 2, persons: 2}
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('responses_id_seq', (SELECT MAX(id) FROM responses));"
      );
    });
};
