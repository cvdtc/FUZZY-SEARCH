import dbConnection from '../config/index.js';
import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

import merekModels from './merek.js';
import logsModel from './log.js';

const databaseConnection = dbConnection;
const db = {};

db.Sequelize = Sequelize;
db.databaseConnection = databaseConnection;

db.merekModels = merekModels(databaseConnection, Sequelize);
db.logsModel = logsModel(databaseConnection, Sequelize);

db.databaseConnection.sync({ force: false, alter: false });

export default db;
