const mysql = require("mysql2/promise.js");

// 데이터베이스 연결 설정
const connection = async () => {
  const conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    dateStrings: true,
    database: "BookShop",
  });

  return conn;
};

module.exports = connection;
