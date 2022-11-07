const express = require("express");
const { getUser } = require("../controllers/user.controller");

const router = express.Router();

router.get("/get_user/:user_id", getUser);

module.exports = router;
