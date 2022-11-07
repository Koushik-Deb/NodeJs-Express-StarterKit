const httpStatus = require("http-status");

const db = require("../db/db");
const User = db.User;

const getUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ user_id: req.params.user_id });
    res.send(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUser,
};
