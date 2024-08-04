require("dotenv").config();
const mongoose = require("mongoose");

// Define the schema for players
const playersSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    // required: true, // Uncomment this if you want ranking to be required
    // unique: true,
  },
  name: {
    type: String,
    // required: true, // Uncomment this to enforce name entry
  },
  dob: {
    type: Date, // Change to Date for better date handling
    // required: true, // Uncomment this to enforce date of birth entry
  },
  score: {
    type: Number,
    // required: true, // Uncomment this to enforce score entry
  },
  event: {
    type: String,
    // required: true,
  },
  country: {
    type: String,
    // required: true,
  },
});

const Menranking = mongoose.model("Menranking", playersSchema);

module.exports = Menranking;
