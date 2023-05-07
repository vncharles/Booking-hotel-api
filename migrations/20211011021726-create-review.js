'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reviews', {
      review_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      user_uuid: {
        type: Sequelize.STRING,
        references: {
          model: 'users',
          key: 'user_uuid'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      review_content: {
        type: Sequelize.STRING
      },
      review_star: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('reviews');
  }
};