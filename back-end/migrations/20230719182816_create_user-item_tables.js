/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id').primary();
            table.string('first_name', 80).notNullable();
            table.string('last_name', 80).notNullable();
            table.string('password', 60).notNullable();
            table.timestamps()
        })
        .createTable('items', function(table) {
            table.increments('id').primary();
            table.integer('user_id').references('id').inTable('user').notNullable();
            table.string('item_name', 100).notNullable();
            table.string('description', 255).notNullable();
            table.timestamps()
        })
        // table.integer('user_id').references('id').inTable('user').notNullable();
    };
    
    exports.down = function(knex) {
        return knex.schema
        .dropTable('user_account')
        .dropTable('role');
    };
    