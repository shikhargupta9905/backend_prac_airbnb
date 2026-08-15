const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to the db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
  res.send("hi , i am the root");
});

app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "my new villa",
    description: "by the marine beach",
    price: 2200,
    location: "marine drive , goa",
    country: "India",
  });
  await sampleListing.save();
  console.log("sample was saved");
  res.send("successful testing");
});

app.listen(8080, () => {
  console.log("server is started at port 8080");
});