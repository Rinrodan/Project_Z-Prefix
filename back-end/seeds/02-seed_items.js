/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {  
      return knex('items').insert([
        {id: 1, user_id: 2, item_name: 'Adult Bike', description: 'This bike can ride fast and far without much effort, you will be the envy on the block riding this bad boy', quantity: 66},
        {id: 2, user_id: 3, item_name: 'Smartphone', description: 'This smartphone has a large screen and a long battery life. Its perfect for streaming movies and playing games on the go', quantity: 12},
        {id: 3, user_id: 4, item_name: 'Laptop', description: 'This laptop is lightweight and has a long battery life. It\'s perfect for working on the go or streaming movies on long flights', quantity: 23},
        {id: 4, user_id: 2, item_name: 'Smartwatch', description: 'This smartwatch has a sleek design and is packed with features like GPS tracking, heart rate monitoring, and more', quantity: 45},
        {id: 5, user_id: 1, item_name: 'Wireless Earbuds', description: 'These earbuds are wireless and have noise-cancelling technology. They\'re perfect for listening to music or taking calls on the go', quantity: 78},
        {id: 6, user_id: 4, item_name: 'Portable Charger', description: 'This portable charger has a large capacity and can charge your phone multiple times before needing to be recharged itself', quantity: 9},
        {id: 7, user_id: 3, item_name: 'Bluetooth Speaker', description: 'This Bluetooth speaker has great sound quality and is perfect for outdoor parties or listening to music while you work', quantity: 33},
        {id: 8, user_id: 1, item_name: 'Electric Toothbrush', description: 'This electric toothbrush has multiple settings and can help improve your oral hygiene in just two minutes a day', quantity: 54},
        {id: 9, user_id: 5, item_name: 'Air Fryer', description: 'This air fryer can cook your favorite foods with little to no oil, making them healthier than traditional frying methods', quantity: 77},
        {id: 10, user_id: 2, item_name: 'Robot Vacuum', description: 'This robot vacuum can clean your floors while you relax or do other things. It\'s perfect for busy people who don\'t have time to clean', quantity: 21},
        {id: 11, user_id: 3, item_name: 'Smart Thermostat', description: 'This smart thermostat can learn your habits and adjust the temperature accordingly, saving you money on your energy bill', quantity: 42},
        {id: 12, user_id: 4, item_name: 'Instant Pot', description: 'This Instant Pot can cook your favorite meals in minutes, making it perfect for busy weeknights or meal prep', quantity: 15},
        {id: 13, user_id: 1, item_name: 'Fitness Tracker', description: 'This fitness tracker can track your steps, calories burned, heart rate, and more. It\'s perfect for people who want to stay active and healthy', quantity: 88},
        {id: 14, user_id: 5, item_name: 'Wireless Headphones', description: 'These wireless headphones have great sound quality and are perfect for listening to music or taking calls on the go', quantity: 27},
        {id: 15, user_id: 2, item_name: 'Smart Lock', description: 'This smart lock can be controlled from your phone and allows you to give access to guests or service providers without giving them a key', quantity: 63}
      ]);
    });
};
