//Imports
const mongoose = require("mongoose");

//Schema
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Exports
module.exports = mongoose.model("Posts", PostSchema);
