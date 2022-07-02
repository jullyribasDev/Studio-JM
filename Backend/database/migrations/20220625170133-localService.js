'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('localService', {
            id_local: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            localService: {
                type: Sequelize.STRING,
                allowNull: false
            },
            fk_profissional: {
                type: Sequelize.INTEGER,
                references:{
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
        await queryInterface.dropTable("localService")
    }
};