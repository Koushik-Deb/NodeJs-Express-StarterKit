const mongoose = require("mongoose");
const config = require("../../config/base-config");
const uri = `mongodb+srv://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_CLUSTER}.mongodb.net/test_db?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
  else console.log("Successfully connected to MongoDB");
});

module.exports = {
  User: require("../models/user.model"),
};
