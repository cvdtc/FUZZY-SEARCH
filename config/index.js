import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();

const dbConnection = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASS,
    {
        port: 3306,
        host: '47.245.126.138',
        dialect: 'mysql',
        pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
        operatorsAliases: false,
        timezone: '+07:00',
        dialectOptions: {
            //  useUTC: false,
            timezone: '+07:00',
        },
        define: { freezeTableName: true },
    }
);

export default dbConnection;
