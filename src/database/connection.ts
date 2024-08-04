import databaseConfig from "../config/database";
import { DataTypes, Sequelize } from "sequelize";

(Sequelize as any).postgres.DECIMAL.parse = function (value: any): number {
	return parseFloat(value);
};

const connection = new Sequelize(databaseConfig);

connection
	.authenticate()
	.then(() => {
		console.log("Connected to database");
	})
	.catch((error: Error) => {
		console.error("Error connecting to database", error);
	});

export default connection;
