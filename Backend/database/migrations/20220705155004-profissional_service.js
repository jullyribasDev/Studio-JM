'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('profissional_service', {
      id_profissionalservice: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fk_profissional: {
        type: Sequelize.INTEGER,
        references: {
          model: "profissional",
          key: "id_profissional"
        }
      },
      fk_service: {
        type: Sequelize.INTEGER,
        references:{
            model: "servico",
            key: "id_service"
        }
    },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('profissional_service');
  }
};
