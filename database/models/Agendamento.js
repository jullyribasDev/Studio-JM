module.exports = (Sequelize, DataType) => {
    const Agendamento = Sequelize.define('Agendamento', {
        id_agendamento: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fk_profissional: DataType.INTEGER,
        fk_cliente: DataType.INTEGER,
        fk_service: DataType.INTEGER,
    }, {
        tableName: 'agendamento',
        timestamps: true
    });

    Agendamento.associate = (models) => {
        Agendamento.belongsTo(models.Profissional, {
            as: "profissional",
            foreignKey: "fk_profissional"
        });
        Agendamento.belongsTo(models.Cliente, {
            as: "cliente",
            foreignKey: "fk_cliente"
        });
        Agendamento.belongsTo(models.Servico, {
            as: "servico",
            foreignKey: "fk_service"
        });
    };
    return Agendamento;
};