const joi = require("joi");

module.exports.listingSchema = joi.object({
  listing: joi
    .object({
      title: joi.string().trim().required(),
      description: joi.string().trim().required(),
      image: joi.string().allow("", null),
      price: joi.number().min(0).required(),
      location: joi.string().trim().required(),
      country: joi.string().trim().required(),
      category: joi.string().required(),
    })
    .required(),
});

module.exports.reviewSchema = joi.object({
  review: joi
    .object({
      rating: joi.number().min(1).max(5).required(),
      comment: joi.string().trim().required(),
    })
    .required(),
});

module.exports.userSchema = joi.object({
  email: joi.string().email().trim().lowercase().required(),
  username: joi.string().trim().lowercase().required(),
  password: joi.string().required(),
});
