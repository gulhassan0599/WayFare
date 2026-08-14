const Listing = require("../models/Listing.js");
let sampleData = require("./data.js");
const mongoose = require("mongoose");

async function main() {
  // 1. Establish the network connection first
  await mongoose.connect("mongodb+srv://gulhassan0699:sqrxnXIAx7eUdJB1@cluster0.pp8b0vl.mongodb.net/?appName=Cluster0");
  console.log("Database is Connected Successfully");

  // 2. Safely run your database queries now that the connection is alive
  await initializeDB();
  
  // 3. Close the connection so the script exits cleanly
  await mongoose.disconnect();
}

const initializeDB = async () => {
  await Listing.deleteMany({});
  sampleData = sampleData.map((data) => ({
    ...data,
    createdBy: "6a7dc4a8fe8b884ebf961776",
  }));
  await Listing.insertMany(sampleData);
  console.log("Sample data is inserted into Database");
};

main().catch(err => console.log(err));