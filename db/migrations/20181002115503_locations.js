exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', (table) => {
    table.increments();
    table.integer('account_id').notNullable().references('accounts.id');
    table.text('address').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations')
};
