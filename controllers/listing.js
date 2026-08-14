const Listing = require("../models/Listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const geocodingClient = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN });

module.exports.index = async (req, res) => {
  const { search, category } = req.query;

  let lists;
  if (search) {
    if (category) {
      lists = await Listing.find({
        $text: { $search: search },
        category: category,
      });
    } else {
      lists = await Listing.find({
        $text: { $search: search },
      });
    }
  } else if (category) {
    lists = await Listing.find({ category });
  } else {
    lists = await Listing.find({});
  }
  if (lists.length === 0 && (search || category)) {
    req.flash("error", "No places matched your criteria.");
    return res.redirect("/listings");
  }
  const uniqueCategories = await Listing.distinct("category");
  res.render("listings/index.ejs", {
    lists,
    search,
    category,
    uniqueCategories,
  });
};

module.exports.renderCreateForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.createListing = async (req, res, next) => {
  const responce = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
  const url = req.file.path;
  const filename = req.file.filename;
  if (!req.body.listing) {
    throw new ExpressError(400, "Invalid Data");
  }
  const newPlace = new Listing(req.body.listing);
  newPlace.createdBy = req.user._id;
  newPlace.image = { url, filename };
  newPlace.geometry = responce.body.features[0].geometry;
  await newPlace.save();
  req.flash("success", "Place added successfully");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const lists = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("createdBy");
  if (!lists) {
    req.flash("error", "Place not found");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { lists });
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const lists = await Listing.findById(id);
  if (!lists) {
    req.flash("error", "Place not found");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { lists });
};

module.exports.editListing = async (req, res) => {
  const responce = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  // geometry update was trapped inside this file-check
  listing.geometry = responce.body.features[0].geometry;

  if (typeof req.file !== "undefined") {
    const url = req.file.path;
    const filename = req.file.filename;
    listing.image = { url, filename };
  }

  if (!req.body.listing) {
    throw new ExpressError(400, "Invalid Data");
  }

  await listing.save();
  req.flash("success", "Place updated successfully");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Place deleted successfully");
  res.redirect(`/listings`);
};
