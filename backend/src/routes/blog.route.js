const express = require("express");
const Blog = require("../models/blog.model");
const router = express.Router();



//get all blogs
router.get("/", async(req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).send({ message: "Blogs fetched successfully!", blogs });
  } catch (error) {
     console.log("Error fatching all blog", error)
    res.status(500).send({ message: "Error fetching blogs", error });
  }
});

//post a new blog
router.post("/add-post", async (req, res) => {
  try {
    const newBlog = new Blog({
      ...req.body,
    });
    const blog = await newBlog.save();
    res.status(200).send({ message: "Blog added successfully!", blog });
  } catch (error) {
    console.log("Error Creating a new blog", error)
    res.status(500).send({ message: "Error adding blog", error });
  }
});

module.exports = router;
