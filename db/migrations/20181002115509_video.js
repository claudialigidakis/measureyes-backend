exports.up = function(knex, Promise) {
  return knex.schema.createTable('video', (table) => {
    table.increments();
    table.integer('locations_id').notNullable().references('locations.id');
    table.string('video_name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('video')
};
