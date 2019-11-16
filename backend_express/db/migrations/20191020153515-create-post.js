'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: 'id'
        },
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};