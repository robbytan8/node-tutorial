const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "host_name",
  user: "username",
  password: "password",
  database: "db_name"
});

connection.connect(function (err) {
  if (err) throw err;
  connection.query("SELECT * FROM table_name", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    connection.end();
  });
});