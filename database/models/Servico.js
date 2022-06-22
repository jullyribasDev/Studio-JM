module.exports = (Sequelize, DataType) => {
    const Servico = Sequelize.define('Servico', {
        id_service: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        procedimento: {
            type: DataType.STRING,
            allowNull: false
        },
        description: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'servico',
        timestamps: true
    });

    return Servico;
};