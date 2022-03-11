const webtoken = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/login", async (request, response) => {
  const { username, password } = request.body;

  const user = await User.findOne({ email: username });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!user || !passwordCorrect) {
    return response.status(401).json({
      error: `invalid username or password`,
    });
  }

  const tokenObjects = {
    username: user.username,
    id: user._id,
  };

  const token = webtoken.sign(tokenObjects, "test");

  response
    .status(200)
    .send({ token, username: user.username, name: user.name });
});

router.post("/register", async (req, res) => {
  const emailExists = await User.exists({ email: req.body.email });
  if (emailExists)
    return res.status(202).send({
      message: "This email already exists!",
    });

  const usernameExists = await User.exists({ username: req.body.username });
  if (usernameExists)
    return res.status(202).send({
      message: "This username already exists!",
    });

  const UIDExists = await User.exists({ UID: req.body.UID });
  if (UIDExists)
    return res.status(202).send({
      message: "This UID already exists!",
    });

  bcrypt.hash(req.body.password, 10, function (err, hash) {
    const newUser = new User({
      email: req.body.email,
      username: req.body.username,
      password: hash,
      name: req.body.name,
      UID: req.body.UID,
      // TODO: implement later since we won't require a #? (or will we?)
      // phoneNumber: req.body.phoneNumber,
      reviews: [],
      products: [],
    });
    const saved = newUser.save().catch((err) => {
      return res.status(500).send({
        message: "Internal server error, please try again later!",
      });
    });
    res.status(201).json(saved);
  });
});

router.get("/fetchWithEmail/:email", function (req, res) {
  User.findOne({
    // search by an email
    $or: [{ email: req.params.email }],
  })
    .then((user) => {
      if (!user) {
        return res.status(200).send({
          message: "User not found",
        });
      }
      return res.status(200).send({ user, message: "User found!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Internal server error, please try again later!",
        error: err,
      });
    });
});

router.get("/fetchWithUsername/:username", function (req, res) {
  User.findOne({
    // search by a username
    $or: [{ username: req.params.username }],
  })
    .then((user) => {
      if (!user) {
        return res.status(200).send({
          message: "User not found",
        });
      }
      return res.status(200).send({ user, message: "User found!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Internal server error, please try again later!",
        error: err,
      });
    });
});

router.put("/update", function (req, res, next) {
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    User.findOneAndUpdate(
      {
        // search by an id
        $or: [{ email: req.body.email }],
      },
      {
        email: req.body.email,
        username: req.body.username,
        password: hash,
        name: req.body.name,
        UID: req.body.UID,
        // TODO: implement later
        // phoneNumber: req.body.phoneNumber,
        reviews: [],
        products: [],
      }
    )
      .then((user) => {
        console.log(user);
        if (!user) {
          return res.status(400).send({
            message: "this user does not exist",
          });
        }
        return res.status(200).send(user);
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Internal server error, please try again later!",
          error: err,
        });
      });
  });
});

router.delete("/delete/:email", function (req, res) {
  User.findOneAndDelete({
    // search by an email
    $or: [{ email: req.body.email }],
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "This user does not exist",
        });
      } else
        return res.status(200).send({ message: "User deleted successfully" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Internal server error, please try again later!",
        error: err,
      });
    });
});

module.exports = router;
