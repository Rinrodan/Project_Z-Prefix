/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, first_name: 'rowValue1', last_name: 'rowValue2', user_name: 'rowValue3'},
    {id: 2, last_name: 'rowValue2'},
    {id: 3, user_name: 'rowValue3'}
  ]);
};
