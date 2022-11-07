const config = require("../../config/base-config");

module.exports = errorHandler;

function errorHandler(err, req, res, next) {
  if (typeof err === "string") {
    return res.status(400).json({ message: err });
  }

  if (err.name === "ValidationError") {
    // mongoose validation error
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ message: "Invalid Token" });
  }
  if (err.name === "MulterError" && err.message === "File too large") {
    // jwt authentication error
    return res.status(413).json({
      message: `${err.message}, Maximum allowed files size is ${config.MAX_SIZE_OF_FILES}mb.`,
    });
  }
  if (err.name === "MulterError" && err.message === "Too many files") {
    // jwt authentication error
    return res.status(406).json({
      message: `${err.message}, Maximum ${config.MAX_NO_OF_FILES} files are allowed.`,
    });
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message });
}
