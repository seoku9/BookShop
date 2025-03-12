const express = require("express");

const router = express.Router();
const { allbooks, bookDetail } = require("../controller/BookController");
router.use(express.json());

router.get("/", allbooks);
router.get("/:id", bookDetail);

module.exports = router;
