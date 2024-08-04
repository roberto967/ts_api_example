import dotenv from "dotenv";
import { Dialect } from "sequelize";

console.log(process.env.DATABASE_HOST);

const dbConfig = {
	dialect: "postgres" as Dialect,
	host: process.env.DATABASE_HOST,
	port: parseInt(process.env.DATABASE_PORT ?? "5432"),
	username: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	database: process.env.DATABASE_NAME,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
};

export default dbConfig;
