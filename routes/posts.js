//Imports
const express = require("express");
const router = express.Router();
const Post = require("../models/post");

//GET BACK ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMIT A POST
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  const savedPost = await post.save();
  try {
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE A POST
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE A POST
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } },
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Exports
module.exports = router;
