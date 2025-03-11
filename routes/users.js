const express = require("express");

const router = express.Router();
const conn = require("../db");
const { StatusCodes } = require("http-status-codes");
const {
  join,
  login,
  passwordReset,
  requestPasswordReset,
} = require("../controller/UserController");
router.use(express.json());

router.post("/join", join);
router.post("/login", login);
router.post("/reset", requestPasswordReset);
router.put("/reset", passwordReset);
router.post("/join", (req, res) => {});

module.exports = router;
