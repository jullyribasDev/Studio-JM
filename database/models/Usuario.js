module.exports = (Sequelize, DataType) => {
    const Usuario = Sequelize.define('Usuario', {
        id_user: {
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
        isProfissional: DataType.STRING
    }, {
        tableName: 'usuario',
        timestamps: true
    });

    return Usuario;
};