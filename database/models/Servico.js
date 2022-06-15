module.exports = (Sequelize, DataType) => {
    const Servico = Sequelize.define('Servico', {
        id_service: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncremet: true,
        },
        service: DataType.STRING
    }, {
        tableName: 'servico',
        timestamps: false
    });

    return Servico;
};