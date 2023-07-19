/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id').primary();
            table.string('first_name', 100).notNullable();
            table.string('last_name', 100).notNullable();
            table.string('user_name', 100).notNullable();
            table.timestamps()
        })
        .createTable('items', function(table) {
            table.increments('id').primary();
            table.integer('user_id').references(users(id));
            table.string('item_name', 100).notNullable();
            table.string('description', 255).notNullable();
            table.integer('quantity').notNullable();
            table.timestamps()
        })
        // table.integer('user_id').references('id').inTable('user').notNullable();
    };
    
    exports.down = function(knex) {
        return knex.schema
        .dropTable('users')
        .dropTable('items');
    };
    