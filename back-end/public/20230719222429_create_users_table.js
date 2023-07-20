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
            table.string('password', 100).notNullable();
            table.timestamps()
        })
    };
    
    exports.down = function(knex) {
        return knex.schema
        .dropTable('users')

    };
    