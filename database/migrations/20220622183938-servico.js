'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('servico', {
            id_service: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            procedimento: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
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
        await queryInterface.dropTable('servico');
    }
};