exports.seed = function(knex, Promise) {
  return knex('accounts').del()
    .then(function () {
      return knex('accounts').insert([
        {id: 1, store_name: 'claudias_test', first_name: 'Claudia', last_name: 'Ligidakis', email: 'cligidakis@yahoo.com', password: '$2a$10$vj6rshiShRql5E0A5DxKWOW6Qso/8C/U4ycefHIp5I5Ua3GW1HESS'}
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('accounts_id_seq', (SELECT MAX(id) FROM accounts));"
      );
    });
};
