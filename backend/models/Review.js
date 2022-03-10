const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  review: String,
  starRatings: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("review", ReviewSchema);
