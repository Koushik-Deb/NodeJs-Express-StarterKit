const jwt = require("jsonwebtoken");
const config = require("../config/base-config");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split("Bearer ")[1];
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.ACCESS_SECRET, function (err, decoded) {
      if (err) {
        return res
          .status(401)
          .json({ error: true, message: "Unauthorized access." });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).send({
      error: true,
      message: "No token provided.",
    });
  }
};
