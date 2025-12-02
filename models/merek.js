const merekModels = (dbConn, sequelize) => {
    const merekField = dbConn.define('merek', {
        idmerek: {
            type: sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        merek: {
            type: sequelize.STRING,
            allowNull: false
        },
        deskripsi: {
            type: sequelize.STRING(2048),
            allowNull: false,
        },
        jenis: {
            type: sequelize.STRING,
            allowNull: false,
        }
    });
    return merekField;
};

export default merekModels;