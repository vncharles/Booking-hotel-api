'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_uuid: {
        type: Sequelize.STRING,
        references: {
          model: 'users',
          key: 'user_uuid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      rate_star: {
        type: Sequelize.INTEGER
      },
      rate_comment: {
        type: Sequelize.STRING
      },
      hotel_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'hotels',
          key: 'hotel_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
    return queryInterface.dropTable('rates');
  }
};