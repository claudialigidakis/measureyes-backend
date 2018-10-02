exports.up = function(knex, Promise) {
  return knex.schema.createTable('accounts', (table) => {
    table.increments();
    table.string('store_name').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accounts')
};
