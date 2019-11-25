'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        first_name: 'John',
        last_name: 'Doe',
        email: 'demo@demo.com',
        created_at: new Date(),
        updated_at: new Date(),
        hash: "$2a$10$GUS0Ejo/gLLLjtbbJMbqxu4KSBFUn7UJ/5n7XQxJvNpUaXQQhIerO"
      }, {
        first_name: 'Paul',
        last_name: 'Weller',
        email: 'the@jam.com',
        created_at: new Date(),
        updated_at: new Date(),
        hash: "$2a$10$GUS0Ejo/gLLLjtbbJMbqxu4KSBFUn7UJ/5n7XQxJvNpUaXQQhIerO"
      }, {
        first_name: 'Liam',
        last_name: 'Gallagher',
        email: 'lg@asyouwere.com',
        created_at: new Date(),
        updated_at: new Date(),
        hash: "$2a$10$GUS0Ejo/gLLLjtbbJMbqxu4KSBFUn7UJ/5n7XQxJvNpUaXQQhIerO"
      }, {
        first_name: 'Noel',
        last_name: 'Gallagher',
        email: 'nghfb@themightyi.com',
        created_at: new Date(),
        updated_at: new Date(),
        hash: "$2a$10$GUS0Ejo/gLLLjtbbJMbqxu4KSBFUn7UJ/5n7XQxJvNpUaXQQhIerO"
      }, {
        first_name: 'Ian',
        last_name: 'Brown',
        email: 'the@stoneroses.com',
        created_at: new Date(),
        updated_at: new Date(),
        hash: "$2a$10$GUS0Ejo/gLLLjtbbJMbqxu4KSBFUn7UJ/5n7XQxJvNpUaXQQhIerO"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
