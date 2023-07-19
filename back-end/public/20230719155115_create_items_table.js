/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', function(table) {
        
        })
        
        // table.integer('user_id').references('id').inTable('user').notNullable();
    };
    
    exports.down = function(knex) {
        return knex.schema
        .dropTable('users')
    
    };
    