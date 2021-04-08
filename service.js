var dbHelper = require("./mariaDBConn");
// https://github.com/jareddlc/node-datatables/blob/master/server.js
function UserService() {
  this.getUserList = function (request, response) {
    dbHelper.getConnection(function (conn) {
      conn
        .query("SELECT * FROM member")
        .then((results) => {
          // console.log(results); //[ {val: 1}, meta: ... ]
          //Output
          var output = {};
          var temp = [];
          output.datas = results;
          dbHelper.sendJSON(response, 200, output);
        })
        .then((res) => {
          console.log("res = " + res);
          // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch((err) => {
          //handle error
          console.log(err);
          conn.end();
        });
    });
  };
}
module.exports = new UserService();
