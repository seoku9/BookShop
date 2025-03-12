const conn = require("../db");

const { StatusCodes } = require("http-status-codes");
const router = require("../routes/users");

const allCategory = (req, res) => {
  let sql = "SELECT * FROM category";

  conn.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    return res.status(StatusCodes.CREATED).json(results);
  });
};

module.exports = {
  allCategory,
};
