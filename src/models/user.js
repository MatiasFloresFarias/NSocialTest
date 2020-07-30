const mysql = require("mysql");

connection = mysql.createConnection({
  host: "#",
  user: "root",
  password: "password",
  database: "nsocial_dev",
});

let userModel = {};

userModel.getUsers = (callback) => {
  if (connection) {
    connection.query("SELECT  * FROM user ORDER BY id", (err, rows) => {
      if (err) {
        throw err;
      } else {
        callback(null, rows);
      }
    });
  }
};

module.export = userModel; 

