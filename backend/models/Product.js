const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  description: String,
  price: Number,
  tags: Array,
  condition: String,
});

<<<<<<< HEAD
Product iphone = new Product();


module.exports = mongoose.model('product', Product)
=======
module.exports = mongoose.model("product", Product);
>>>>>>> 55e930c3bb54029ec7b192c9593eb5c832176ef6
