const logsModel = (dbConn, sequelize) => {
    const logsField = dbConn.define('logs', {
        idlogs: {
            type: sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        keyword: {
            type: sequelize.STRING,
            allowNull: false
        },
        details: {
            type: sequelize.STRING(2048),
            allowNull: false,
        },
        total_result: {
            type: sequelize.STRING,
            allowNull: false,
        }
    });
    return logsField;
};

export default logsModel;