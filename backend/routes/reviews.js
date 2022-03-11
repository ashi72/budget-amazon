const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const axios = require("axios");

router.post("/postReview", async (req, res) => {
  const reviewer = await axios.get(
    `http://localhost:7000/users/api/v1/fetchWithUsername/${req.body.reviewer}`
  );
  const seller = await axios.get(
    `http://localhost:7000/users/api/v1/fetchWithUsername/${req.body.seller}`
  );
  console.log(reviewer.data.user._id);
  Review.findOne({
    reviewer: reviewer.data.user._id,
    seller: seller.data.user._id,
    review: req.body.review,
  }).then((review) => {
    if (review) {
      return res.status(204).send({
        message: "The review already exists",
      });
    } else {
      const newReview = new Review({
        reviewer: reviewer.data.user._id,
        starRatings: req.body.starRatings,
        seller: seller.data.user._id,
        review: req.body.review,
      });
      console.log(newReview);
      newReview
        .save()
        .then((res) => {})
        .catch((err) => {
          return res.status(500).send({
            message: "Internal server error, please try again later!",
            error: err,
          });
        });
      res.status(201).send(newReview);
    }
  });
});

router.get("/fetchSellerReviews/:seller", async function (req, res) {
  // get seller from username
  const user = await axios.get(
    `http://localhost:7000/users/api/v1/fetchWithUsername/${req.params.seller}`
  );
  if (!user) res.status(404).send({ message: "User not found in database" });
  Review.find({ seller: user.data.user._id })
    // .populate("reviewer", "email")
    .then((reviews) => {
      if (!reviews[0]) {
        return res.status(204).send({
          message: "Seller not found, or no reviews for this seller",
        });
      } else {
        return res
          .status(200)
          .send({ reviews, message: "Reviews successfully fetched" });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Internal server error, please try again later!",
        error: err,
      });
    });
});

router.put("/editReview/:reviewid", function (req, res) {
  Review.findOneAndUpdate(
    { _id: req.params.reviewid },
    {
      reviewer: req.body.reviewer,
      starRatings: req.body.starRatings,
      seller: req.body.seller,
      review: req.body.review,
    }
  )
    .then((review) => {
      if (!review) {
        return res.status(404).send({
          message: "The review does not exist",
        });
      } else {
        return res.status(200).send(review);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Internal server error, please try again later!",
        error: err,
      });
    });
});

router.delete("/delete/:reviewid", function (req, res) {
  Review.findByIdAndRemove(req.params.reviewid, (err, reviews) => {
    if (!reviews) {
      return res.status(404).send({
        message: "The review does not exist",
      });
    } else
      return res.status(200).send({
        message: "Review deleted successfully",
        id: req.params.id,
        review: reviews,
      });
  }).catch((err) => {
    return res.status(500).send({
      message: "Internal server error, please try again later!",
      error: err,
    });
  });
});

module.exports = router;
