const conn = require("../db");

const { StatusCodes } = require("http-status-codes");
const router = require("../routes/users");

const addToCart = (req, res) => {
  const { book_id, quantity, user_id } = req.body;
  let sql =
    "INSERT INTO cartItems (book_id, quantity, user_id) VALUES (?, ?, ?)";

  let values = [book_id, quantity, user_id];

  conn.query(sql, values),
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).json(err);
      }
      res.status(StatusCodes.CREATED).json(result);
    };
};
const getCartItems = (req, res) => {
  const { user_id, selected } = req.body;
  let sql =
    "SELECT cartItems.id, book_id, title, summary, quantity, price FROM cartItems LEFT JOIN books ON cartItems.book_id = books.id WHERE user_id=? AND cartItems.id IN (?)";
  conn.query(sql, [user_id, selected], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).json(err);
    }
    res.status(StatusCodes.CREATED).json(result);
  });
};
const removeCartItems = (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  let sql = "DELETE FROM cartItems WHERE id = ?";

  let values = [user_id, id];
  conn.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(StatusCodes.BAD_REQUEST).json(err);
    }
    res.status(StatusCodes.CREATED).json(result);
  });
};

module.exports = {
  addToCart,
  getCartItems,
  removeCartItems,
};
