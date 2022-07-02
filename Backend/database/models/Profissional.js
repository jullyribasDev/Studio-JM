module.exports = (Sequelize, DataType) => {
    const Profissional = Sequelize.define('Profissional', {
        id_profissional: {
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
        dataNascimento: DataType.DATE,
        genero: DataType.STRING,
        senha: DataType.STRING,
    }, {
        tableName: 'profissional',
        timestamps: true
    });

    Profissional.associate = (models) => {
        Profissional.hasMany(models.Cliente, {
            as: "cliente",
            foreignKey: "fk_profissional"
        });
        Profissional.hasMany(models.Agendamento, {
            as: "agendamento",
            foreignKey: "fk_profissional"
        });
        Profissional.hasMany(models.Comentario, {
            as:"comentario",
            foreignKey: "fk_profissional"
        });
        Profissional.hasMany(models.LocalService,{
            as:"localService",
            foreignKey: "fk_profissional"
        });
    }

    return Profissional;
};