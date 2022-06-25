module.exports = (Sequelize, DataType) => {
    const LocalService = Sequelize.define('LocalService', {
        id_local: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        localName: {
            type: DataType.STRING,
            allowNull: false
        },
    }, {
        tableName: 'localService',
        timestamps: true
    });

    return LocalService;
};