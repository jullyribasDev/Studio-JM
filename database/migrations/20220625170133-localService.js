'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('localService', {
            id_local: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            localName: {
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
        await queryInterface.dropTable("localService")
    }
};