exports.up = function(knex, Promise) {
  return knex.schema.createTable('responses', (table) => {
    table.increments();
    table.integer('video_id').notNullable().references('video.id');
    table.integer('person_idx').notNullable();
    table.float('face_pitch', 4).notNullable();
    table.float('face_box_top', 4).notNullable();
    table.float('face_box_left', 4).notNullable();
    table.float('face_yaw', 4).notNullable();
    table.integer('dwell_time').notNullable();
    table.time('time').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('responses')
};
