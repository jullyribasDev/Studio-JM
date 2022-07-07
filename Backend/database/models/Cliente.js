module.exports = (Sequelize, DataType) => {
    const Cliente = Sequelize.define('Cliente', {
        id_cliente: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: DataType.STRING,
        userName: DataType.STRING,
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        endereco: DataType.STRING,
        complement: DataType.STRING,
        cidade: DataType.STRING,
        bairro: DataType.STRING,
        cep: {
            type: DataType.STRING,
            allowNull: false
        },
        dataNascimento: DataType.DATEONLY,
        genero: DataType.STRING,
        senha: DataType.STRING,
        fk_profissional: DataType.INTEGER,
    }, {
        tableName: 'cliente',
        timestamps: true
    });

    Cliente.associate = (models) => {
        Cliente.belongsTo(models.Profissional, {
            as: "profissional",
            foreignKey: "fk_profissional"
        });
        Cliente.hasMany(models.Agendamento,{
            as:"agendamento",
            foreignKey: "fk_cliente"
        });
    }

    return Cliente;
};