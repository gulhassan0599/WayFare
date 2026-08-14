const express = require("express");
const Listing = require("../models/Listing.js");
const Review = require("../models/Review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const router = express.Router({ mergeParams: true });
const reviewController = require("../controllers/review.js");
const {
  reviewValidation,
  isLoggedIn,
  isAuthor,
} = require("../middlewares/index.js");

// ====== CREATE REVIEW ======
router.post(
  "/",
  isLoggedIn,
  reviewValidation,
  wrapAsync(reviewController.createReview),
);

// ====== DELETE REVIEW ======
router.delete(
  "/:reviewid",
  isLoggedIn,
  isAuthor,
  wrapAsync(reviewController.deleteReview),
);

module.exports = router;
