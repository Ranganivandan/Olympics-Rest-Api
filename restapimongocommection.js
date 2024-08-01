const mongoose = require("mongoose");

// MongoDB connection URL
const uri =
  "mongodb+srv://vandanrangani21:Kp5V8ZTrV2hwQOuZ@api.cvnyxj6.mongodb.net/?retryWrites=true&w=majority&appName=api";

// Connect to MongoDB
mongoose
  .connect(uri) // Use these options for better compatibility
  .then(() => {
    console.log("Connection successful");
  })
  .catch((error) => {
    console.error("Connection error:", error); // Log the error for better debugging
  });

// Optional: Handle process termination
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("Connection closed");
  process.exit(0);
});
