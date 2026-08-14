const listingController = require("../controllers/listing.js");
const ExpressError = require("../utils/ExpressError.js");
const { storage } = require("../utils/cloudinary.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/Listing.js");
const multer = require("multer");
const upload = multer({ storage });
const express = require("express");
const router = express.Router();
const {
  listingValidation,
  isLoggedIn,
  isOwner,
} = require("../middlewares/index.js");



router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    listingValidation,
    wrapAsync(listingController.createListing),
  );

// ====== CREATE ROUTE ======
router.get("/new", isLoggedIn, listingController.renderCreateForm);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    listingValidation,
    wrapAsync(listingController.editListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

// ====== EDIT ROUTE ======
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

module.exports = router;
