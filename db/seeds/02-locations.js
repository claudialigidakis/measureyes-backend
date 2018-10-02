exports.seed = function(knex, Promise) {
  return knex('locations').del()
    .then(function () {
      return knex('locations').insert([
        {id: 1, account_id: 1, address: 'Seattle'},
        {id: 2, account_id: 1, address: 'Portland'}
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('locations_id_seq', (SELECT MAX(id) FROM locations));"
      );
    });
};
