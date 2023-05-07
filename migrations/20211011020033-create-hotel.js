'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hotels', {
      hotel_id: {
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
        }
      },
      hotel_name: {
        type: Sequelize.STRING
      },
      hotel_address: {
        type: Sequelize.STRING
      },
      hotel_star: {
        type: Sequelize.INTEGER
      },
      hotel_phone: {
        type: Sequelize.STRING
      },
      hotel_desc: {
        type: Sequelize.TEXT
      },
      hotel_img: {
        type: Sequelize.TEXT
      },
      hotel_slide: {
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
    return queryInterface.dropTable('hotels');
  }
};