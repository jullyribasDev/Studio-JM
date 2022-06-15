module.exports = (Sequelize, DataType) => {
    const LocalService = Sequelize.define('LocalService', {
        id_localService: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncremet: true,
        },
        localService: DataType.STRING
    }, {
        tableName: 'localService',
        timestamps: false
    });

    return LocalService;
};