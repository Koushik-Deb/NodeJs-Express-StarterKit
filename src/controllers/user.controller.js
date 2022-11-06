const httpStatus = require("http-status");

const db = require("../db/db");
const User = db.User;

const getUser = async (req, res) => {
  console.log(req.body);
  console.log("getting user");
  try {
    const user = await User.findOne({ user_id: req.body.user_id });
    console.log(user);
    res.send(user);
  } catch (err) {
    console.log("Err ", err);
  }
};

module.exports = {
  getUser,
};
