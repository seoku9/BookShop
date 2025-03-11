const mysql = require("mysql2");

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  dateStrings: true,
  database: "BookShop",
});

module.exports = connection;
