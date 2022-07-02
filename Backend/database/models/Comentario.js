module.exports = (Sequelize, DataType) => {
    const Comentarios = Sequelize.define('Comentario', {
        id_comentario: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comentario: {
            type: DataType.STRING,
            allowNull: false
        },
        fk_profissional: DataType.INTEGER,
    }, {
        tableName: 'comentario',
        timestamps: true
    });

    Comentarios.associate = (models) =>{
        Comentarios.belongsTo(models.Profissional, {
            as: "profissional",
            foreignKey: "fk_profissional"
        })
    };

    return Comentarios;
};