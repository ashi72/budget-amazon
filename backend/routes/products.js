const webtoken = require("jsonwebtoken");
const express = require("express");
const Product = require("../models/Product");
const User = require("../models/User");
const router = express.Router();

var ObjectId = require("mongoose").Types.ObjectId;

const getTokenFrom = (req) => {
  const auth = req.get("authorization");
  if (auth && auth.toLowerCase().startsWith("bearer ")) {
    return auth.substring(7);
  }
  return null;
};

router.post("/createProductListing", async (req, res) => {
  const token = getTokenFrom(req);
  const decodedToken = webtoken.verify(token, "test");
  if (!decodedToken.id)
    return res.status(401).json({ error: "token missing or invalid" });

  const user = await User.findById(decodedToken.id);
  if (!user) res.status(404).send({ message: "User not found in database" });

  Product.findOne({
    seller: user._id,
    name: req.body.name,
  }).then((product) => {
    if (product) {
      return res.status(204).send({
        message: "The product already exists under this name",
      });
    } else {
      const newProduct = new Product({ ...req.body, seller: user._id });
      newProduct
        .save()
        .then((item) => {
          user.products = user.products.concat(item.toObject()._id);
          user.save();
        })
        .catch((err) => {
          return res.status(500).send({
            message: "Internal server error, please try again later!",
            error: err,
          });
        });
      res.status(201).send(newProduct);
    }
  });
});

router.delete("/delete/:id", function (req, res) {
  Product.findOneAndDelete({
    $or: [{ _id: req.params.id }],
  })
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "This product does not exist",
        });
      } else
        return res
          .status(200)
          .send({ message: "Product deleted successfully" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Internal server error, please try again later!",
        error: err,
      });
    });
});

router.get("/fetchProduct/:product_id", async (req, res) => {
  const product = await Product.findOne({
    _id: ObjectId(req.params.product_id),
  });
  if (!product) {
    return res.status(400).send({
      message: "product does not exist",
    });
  }
  return res.status(200).send(product);
});

router.get("/fetchAllProducts", function (req, res) {
  Product.find().then((products) => {
    if (!products) {
      return res.status(202).send({
        message: "cannot find any",
      });
    } else {
      return res.status(200).send({ products, message: "successful" });
    }
  });
});

router.put("/updateProductListing/:product_id", async (req, res) => {
  const query = { _id: ObjectId(req.params.product_id) };

  Product.findOneAndUpdate(query, req.body)
    .then((product) => {
      if (!product) {
        res.status(400).send({
          error: "product does not exist",
        });
      } else {
        res.status(200).send(product);
      }
    })
    .catch((err) => res.status(400).json(err));
});

router.get("/searchProducts/tag", async (req, res) => {
  console.log(req.body);
  const result = await Product.find({ tags: req.body.tags });
  return res.send(result);
});

router.get("/searchProducts/name/:product_name", async (req, res) => {
  const result = await Product.find({ name: req.params.product_name });
  return res.send(result);
});

module.exports = router;
