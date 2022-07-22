'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comentario', {
      id_comentario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comentario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fk_profissional: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "profissional",
          key: "id_profissional"
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
    await queryInterface.dropTable('comentario')
  }
};
