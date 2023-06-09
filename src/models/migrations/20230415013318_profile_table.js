/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('profile', (table) => {
    table.increments('id').primary();
    table.string('name', 255);
    table.dateTime('birthdt');
    table.string('status', 255);
    table.timestamps;
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('profile');
};
