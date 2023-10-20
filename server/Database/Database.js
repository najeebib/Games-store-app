import mysql from "mysql";
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from the .env file

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

export default db;
