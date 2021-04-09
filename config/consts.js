const config = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '',
    database: 'nodejs_test',
    logging: false,
    pool: {
        max: 1000,
        min: 0,
        idle: 50000,
    },
};


module.exports = { ...config };