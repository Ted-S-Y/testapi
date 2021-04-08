const mariadb = require("mariadb");
import config from './consts';

const pool = mariadb.createPool({
  host: config.DBHost,
  port: config.DBPort,
  user: config.DBUser,
  password: config.DBPass,
  database: config.DBName,
  connectionLimit: 5
});

module.exports = pool;

