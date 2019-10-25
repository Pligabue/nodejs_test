'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [
        {title: 'Post', content: 'Post content', createdAt: new Date(), updatedAt: new Date(), userId: 1}, 
        {title: 'Second Post', content: 'Second post content', createdAt: new Date(), updatedAt: new Date(), userId: 2},
        {title: 'Third Post', content: 'Random content created in the seed', createdAt: new Date(), updatedAt: new Date(), userId: 2},
        {title: 'Fourth Post', content: "I don't know what to put here...", createdAt: new Date(), updatedAt: new Date(), userId: 2},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
