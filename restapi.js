const express = require("express");
require("./restapimongocommection"); // Ensure this connects to MongoDB
const Menranking = require("./mongooseSchema");
const app = express();

const port = process.env.PORT || 4500;

// Middleware to parse JSON request bodies
app.use(express.json());

// Home route
app.get("/", async (req, res) => {
  const resul = await Menranking.find({});
  // console.log(resul);
  res.send(resul);
});

app.get("/mens/search/:name", async (req, res) => {
  const id = req.params.name;
  const result = await Menranking.find({ name: id });
  console.log(result);
  res.send(result);
});

app.put("/mens/update/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Menranking.findByIdAndUpdate(id, req.body);

  console.log(result);
  res.send(result);
});

app.delete("/mens/delete/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Menranking.findByIdAndDelete(id);

  console.log(result);
  res.send(result);
});

// POST route to add men's ranking data
app.post("/mens", async (req, res) => {
  try {
    const newUser = await Menranking.insertMany(req.body);
    // Use await to simplify promise handling
    console.log(newUser);
    res.status(201).send(newUser); // Send back the created resource
  } catch (err) {
    console.error("Error saving user:", err); // Improved error logging
    res.status(500).send("Server Error"); // Send 500 status on error
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
