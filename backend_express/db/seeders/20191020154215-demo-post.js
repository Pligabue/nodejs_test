'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
        title: 'Post',
        content: 'Post content',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
