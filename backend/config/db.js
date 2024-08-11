var mysql = require('mysql2');
require('dotenv').config();

var db = mysql.createConnection({
    uri: this.process.env.MYSQL_URI,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = db;