const mariadb = require('mariadb');
const vals = require('./consts.js');
 
const pool = mariadb.createPool({
    host: vals.DBHost, port:vals.DBPort,
    user: vals.DBUser, password: vals.DBPass,
    connectionLimit: 5
});

module.exports = pool;