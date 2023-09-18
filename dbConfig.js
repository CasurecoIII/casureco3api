// config/dbConfig.js
const mysql = require('mysql2');


const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '', // Enter your database password if you've set one
  database: 'casureco3api',
  port: 3306,
});


module.exports = db;