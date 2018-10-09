exports.up = function(knex, Promise) {
  return knex.schema.createTable('responses', (table) => {
    table.increments();
    table.integer('video_id').notNullable().references('video.id');
    table.integer('unix_time').notNullable();
    table.integer('faces').notNullable();
    table.integer('persons').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('responses')
};
