const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbUrl = process.env.MONGODB_URL;
    await mongoose.connect(dbUrl);
    console.log("Database is Connected Successfully");
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
