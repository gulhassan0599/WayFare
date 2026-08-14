const mongoose = require("mongoose");
const Review = require("./Review");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYSUyMGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    filename: {
      type: String,
      default: "listingimage",
    },
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  // GeoJSON format for storing location cordinates
  geometry: {
    type: {
      type: String,
      enum: ["Point"], // 'geometry.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  country: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Trending",
      "Mountains",
      "Beachfront",
      "Houseboats",
      "Castles",
      "Camping",
      "Cabins",
      "Arctic",
      "Hiking",
      "Pool",
    ],
    required: true,
  },
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },
  ],
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

listingSchema.index({ location: "text", country: "text" });

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

module.exports = mongoose.model("Listing", listingSchema);
