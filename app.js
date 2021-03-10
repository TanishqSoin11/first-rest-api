//Imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

//Import ROUTES
const postRoutes = require("./routes/posts");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("we are on home");
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true },

  () => {
    console.log("connected to DB!");
  },
);

//Listener
app.listen(3000);
