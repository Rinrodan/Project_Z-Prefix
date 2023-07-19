/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {  
      return knex('users').insert([
        {id: 1, first_name: 'Abraham', last_name: 'lincoln', user_name: 'abraham.lincoln', password: 'password'},
        {id: 2, first_name: 'Napoleon', last_name: 'bonaparte', user_name: 'napoleon.bonaparte', password: 'password'},
        {id: 3, first_name: 'Isaac', last_name: 'newton', user_name: 'isaac.newton', password: 'password'},
        {id: 4, first_name: 'Charles', last_name: 'darwin', user_name: 'charles.darwin', password: 'password'},
        {id: 5, first_name: 'Genghis', last_name: 'khan', user_name: 'genghis.khan', password: 'password'}
      ]);
    });
};
