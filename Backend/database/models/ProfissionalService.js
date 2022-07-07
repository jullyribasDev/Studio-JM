module.exports = (Sequelize, DataType) => {
    const ProfissionalService = Sequelize.define('profissional_service', {
        id_profissionalservice: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fk_profissional: DataType.INTEGER,
        fk_service: DataType.INTEGER,
    }, {
        tableName: 'profissional_service',
        timestamps: true
    });
    return ProfissionalService;
}; 