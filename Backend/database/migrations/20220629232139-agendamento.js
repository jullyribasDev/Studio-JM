'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agendamento', {
      id_agendamento: {
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
      fk_cliente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "cliente",
          key: "id_cliente"
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('agendamento');
  }
};
