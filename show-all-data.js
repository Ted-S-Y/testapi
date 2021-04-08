var express = require('express');
var router = express.Router();

const pool = require('./mariaDBConn.js')

router.get('/', function (req, res, next) {
    await pool.query('select * from test_user', function (err, rows, fields) {
        await pool.end();
        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);
            res.send(result);
        } else {
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

module.exports = router;