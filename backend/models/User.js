const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  //email_verified: Boolean,
  username: String,
  password: String, //hashed
  name: String,
  UID: String,
  phoneNumber: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("user", UserSchema);
