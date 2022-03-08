const express = require('express');
const app = express();
const connectDB = require('./db');
const users = require("./routes/users");
const reviews = require("./routes/reviews");
const products = require("./routes/products");
const cors = require('cors')
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
connectDB();
app.use(cors())
app.use('/users/api/v1', users);
app.use('/reviews/api/v1', reviews);
app.use('/products/api/v1', products);
app.listen(7000, () => console.log(`API Server listening on port 7000`));
