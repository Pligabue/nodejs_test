'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
        {title: 'Post', content: 'Post content', created_at: new Date(), updated_at: new Date(), user_id: 1}, 
        {title: 'Second Post', content: 'Second post content', created_at: new Date(), updated_at: new Date(), user_id: 2},
        {title: 'Third Post', content: 'Random content created in the seed', created_at: new Date(), updated_at: new Date(), user_id: 2},
        {title: 'Fourth Post', content: "I don't know what to put here...", created_at: new Date(), updated_at: new Date(), user_id: 2},
        {title: 'Oasis', content: "One of the greatest bands of all time...", created_at: new Date(), updated_at: new Date(), user_id: 3},
        {title: 'Liam Gallagher', content: "I'm John Lennon", created_at: new Date(), updated_at: new Date(), user_id: 3},
        {title: 'Noel Gallagher', content: "One of the greatest songwriters of all time...", created_at: new Date(), updated_at: new Date(), user_id: 4},
        {title: "Noel Gallagher's High Flying Birds", content: "We've got a scissor players", created_at: new Date(), updated_at: new Date(), user_id: 4},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
