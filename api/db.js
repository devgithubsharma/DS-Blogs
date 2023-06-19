import mysql from 'mysql';

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"blog",
    port:8800
})

export default db;