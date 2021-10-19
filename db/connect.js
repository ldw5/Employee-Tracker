const mysql = require('mysql');
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'business_db',
    password: 'Root2468',
    });
    
    module.exports = connect;