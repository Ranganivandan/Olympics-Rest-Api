const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/olympics";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
