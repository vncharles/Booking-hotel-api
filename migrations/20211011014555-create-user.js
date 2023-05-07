'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      user_uuid: {
        type: Sequelize.STRING,
        primaryKey: true,
        // defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      user_email: {
        type: Sequelize.STRING
      },
      user_img: {
        type: Sequelize.TEXT
      },
      user_password: {
        type: Sequelize.STRING
      },
      user_name: {
        type: Sequelize.STRING
      },
      user_phone: {
        type: Sequelize.STRING
      },
      user_role: {
        type: Sequelize.INTEGER
      },
      remember_token: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};