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

    Servico.associate = (models) => {
        Servico.hasMany(models.Agendamento, {
            as: "agendamento",
            foreignKey: "fk_service"
        });
        Servico.belongsToMany(models.Profissional, {
            foreignKey: "fk_profissional",
            as: "ServicosProfissional",
            through:' models.ProfissionalService'
        })
    };

    return Servico;
};