const Listing = require("../models/Listing.js");
const Review = require("../models/Review.js");

module.exports.createReview = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  const newReview = new Review(req.body.review);
  newReview.author = req.user._id;

  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  req.flash("success", "Review added successfully");
  res.redirect(`/listings/${id}`);

  console.log("Review added successfully");
};

module.exports.deleteReview = async (req, res) => {
  const { id, reviewid } = req.params;
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
  await Review.findByIdAndDelete(reviewid);
  req.flash("success", "Review deleted successfully");
  res.redirect(`/listings/${id}`);

  console.log("Review deleted successfully");
};
