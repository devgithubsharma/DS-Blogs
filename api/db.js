import mysql from 'mysql';
import {dbConfig} from "./config/config.js";

const db = mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USERNAME,
    port:dbConfig.PORT,
    password:dbConfig.PASSWORD,
    database:dbConfig.DATABASE
})

export default db;