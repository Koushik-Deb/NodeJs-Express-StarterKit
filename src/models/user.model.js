const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: { type: String, unique: true, required: true },
  user_name: { type: String, required: true, unique: true },
  api_password: { type: String, required: true },
});

userSchema.set("toJSON", { virtuals: true });
module.exports = mongoose.model("User", userSchema);
