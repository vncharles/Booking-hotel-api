'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotel_staffs', {
      staff_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
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
      hotel_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'hotels',
          key: 'hotel_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      role: {
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
    return queryInterface.dropTable('hotel_staffs');
  }
};