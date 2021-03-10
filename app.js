const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
// import ROUTES
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("we are on home");
});

//Middlewares
app.use("/", () => {
  console.log("This is a middleware running");
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true },

  () => {
    console.log("connected to DB!");
  },
);

// Listener
app.listen(3000);
