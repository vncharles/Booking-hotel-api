'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rooms', {
      room_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hotel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'hotels',
          key: 'hotel_id'
        }
      },
      room_name: {
        type: Sequelize.STRING
      },
      room_price: {
        type: Sequelize.STRING
      },
      room_desc: {
        type: Sequelize.STRING
      },
      room_beds: {
        type: Sequelize.INTEGER
      },
      room_area: {
        type: Sequelize.STRING
      },
      room_quantity: {
        type: Sequelize.INTEGER
      },
      room_num_people: {
        type: Sequelize.INTEGER
      },
      room_services: {
        type: Sequelize.STRING
      },
      room_surcharge: {
        type: Sequelize.STRING
      },
      room_imgs: {
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
    return queryInterface.dropTable('rooms');
  }
};