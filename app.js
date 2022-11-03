require("dotenv").config();
const config = require("./config/base-config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const db = require("./src/db/db");
const User = db.User;

const userTest = async () => {
  const newUser = new User({
    user_id: "123",
    user_name: "koushik",
    api_password: "check",
  });

  newUser.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Hurray");
      return "ok";
    }
  });
};

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});

userTest();
