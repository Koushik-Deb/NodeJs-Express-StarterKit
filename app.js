require("dotenv").config();
const config = require("./config/base-config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./src/routes");
const app = express();

const db = require("./src/db/db");
const errorHandler = require("./src/utils/error-handler");
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

const findUser = async () => {
  try {
    const user = await User.findOne({ user_id: "1423" });
    console.log(user);
  } catch (err) {
    console.log("Err ", err);
  }
};

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());
app.use("/", routes);

app.use(errorHandler);

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});

// userTest();
// findUser();
