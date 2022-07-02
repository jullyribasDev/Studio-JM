module.exports = (Sequelize, DataType) => {
    const LocalService = Sequelize.define('LocalService', {
        id_local: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        localService: {
            type: DataType.STRING,
            allowNull: false
        },
        fk_profissional: DataType.INTEGER,
    }, {
        tableName: 'localService',
        timestamps: true
    });

    LocalService.associate= (models) =>{
        LocalService.belongsTo(models.Profissional, {
            as: "profissional",
            foreignKey: "fk_profissional"
        })
    };

    return LocalService;
};