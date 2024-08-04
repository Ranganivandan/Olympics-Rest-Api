require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.DB_URL;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
