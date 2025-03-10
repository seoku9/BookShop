const express = require("express");

const router = express.Router();

router.use(express.json());

router.post("/carts", (req, res) => {
  res.json("장바구니 담기");
});
router.get("/carts", (req, res) => {
  res.json("장바구니 조회");
});
router.delete("/carts", (req, res) => {
  res.json("장바구니 도서 삭제");
});

router.get("/carts", (req, res) => {
  res.json("장바구니 조회");
});

module.exports = router;
