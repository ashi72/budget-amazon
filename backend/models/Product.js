const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    description: String,
    price: Number,
    tags: Array,
    condition: String
})

module.exports = mongoose.model('product', Product)