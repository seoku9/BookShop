const conn = require("../db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { StatusCodes } = require("http-status-codes");

const allbooks = (req, res) => {
  let category_id = req.query;
  if (category_id) {
    let sql = "SELECT * FROM books WHERE category_id=?";

    let { category_id } = req.query;

    conn.query(sql, category_id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      if (results.length) return res.status(StatusCodes.CREATED).json(results);
      else return res.status(StatusCodes.NOT_FOUND).end();
    });
  } else {
    let sql = "SELECT * FROM books";

    conn.query(sql, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.CREATED).json(results);
    });
  }
};
const bookDetail = (req, res) => {
  let sql = "SELECT * FROM books WHERE id=?";

  let { id } = req.params;

  conn.query(sql, id, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).end();
    }
    if (results[0]) return res.status(StatusCodes.CREATED).json(results[0]);
    else return res.status(StatusCodes.NOT_FOUND).end();
  });
};

module.exports = {
  allbooks,
  bookDetail,
};
