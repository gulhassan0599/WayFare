const Listing = require("../models/Listing.js");
const Review = require("../models/Review.js");
const ExpressError = require("../utils/ExpressError.js");
const {
  listingSchema,
  reviewSchema,
  userSchema,
} = require("../utils/modelsSchema.js");

/**
 * Middleware: listingValidation
 * Validates the listing data using Joi schema.
 * Throws a 400 error if validation fails.
 */
module.exports.listingValidation = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((err) => err.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

/**
 * Middleware: reviewValidation
 * Validates the review data using Joi schema.
 * Throws a 400 error if validation fails.
 */
module.exports.reviewValidation = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((err) => err.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

/**
 * Middleware: userValidation
 * Validates the user sign-up data using Joi schema.
 * Throws a 400 error if validation fails.
 */
module.exports.userValidation = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map((err) => err.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

/**
 * Middleware: isLoggedIn
 * Checks if the user is authenticated.
 * Redirects to login page if not.
 */
module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.savedUrl = req.originalUrl;
    req.flash("error", "You must be logged in to perform this action");
    return res.redirect("/users/login");
  }
  next();
};

/**
 * Middleware: redirectUrl
 * Restores the originally requested URL before login
 * into res.locals so it can be used for redirection.
 */
module.exports.redirectUrl = (req, res, next) => {
  if (req.session.savedUrl) {
    res.locals.savedUrl = req.session.savedUrl;
  }
  next();
};

/**
 * Middleware: isOwner
 * Verifies that the currently logged-in user is the creator of the listing.
 * Restricts access to edit/delete routes.
 */
module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing.createdBy.equals(res.locals.currUser._id)) {
    req.flash("error", "Access denied");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

/**
 * Middleware: isAuthor
 * Verifies that the currently logged-in user is the author of the review.
 * Restricts access to delete review route.
 */
module.exports.isAuthor = async (req, res, next) => {
  const { id, reviewid } = req.params;
  const review = await Review.findById(reviewid);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "Access denied");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
