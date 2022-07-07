'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('profissional', {
      id_profissional: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: Sequelize.STRING,
      userName: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco: Sequelize.STRING,
      complement: Sequelize.STRING,
      cidade: Sequelize.STRING,
      bairro: Sequelize.STRING,
      cep: {
        type: Sequelize.STRING(8),
        allowNull: false
      },
      dataNascimento: Sequelize.DATEONLY,
      genero: Sequelize.STRING,
      senha: Sequelize.STRING,
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
    await queryInterface.dropTable('profissional');
  }
};
