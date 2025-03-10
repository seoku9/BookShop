const express = require("express");

const router = express.Router();

router.use(express.json());

router.post("/orders", (req, res) => {
  res.json("주문 하기");
});
router.get("/orders", (req, res) => {
  res.json("주문 목록 조회");
});
router.get("/orders/:id", (req, res) => {
  res.json("주문 상세 상품 조회");
});

module.exports = router;
