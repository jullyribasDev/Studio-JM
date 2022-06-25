module.exports = (Sequelize, DataType) => {
    const Contato = Sequelize.define('Contato', {
        id_contato: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        message: {
            type: DataType.STRING,
            allowNull: false
        },
    }, {
        tableName: 'contato',
        timestamps: true
    });

    return Contato;
};