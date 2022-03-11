const mongoose = require("mongoose");
require('dotenv').config()

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const URI =
  "mongodb+srv://"+user+":"+password+"@cluster35l.x01ed.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose.connect(
    URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("MongoDB Successfully Connected!")
  );
};
module.exports = connectDB;
