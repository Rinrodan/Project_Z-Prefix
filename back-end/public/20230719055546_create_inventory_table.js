/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id');
        table.string('UserId', 250).notNullable(); //need number designator
        table.string('Item_Name', 250).notNullable();
        table.string('Description', 250).notNullable();
        table.string('Quantity', 250).notNullable(); //need number designator
        table.timestamps(true, true);
    })
};


exports.down = function(knex) {
    return knex.schema
    .dropTable('items')

};
