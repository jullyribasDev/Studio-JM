module.exports = (Sequelize, DataType) => {
    const Usuario = Sequelize.define('Usuario', {
        id_user: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncremet: true,
        },
        nome: DataType.STRING,
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        endereco: DataType.STRING,
        complement: DataType.STRING,
        senha: DataType.STRING,
        isProfissional: DataType.STRING
    }, {
        tableName: 'usuario',
        timestamps: false
    });

    return Usuario;
};