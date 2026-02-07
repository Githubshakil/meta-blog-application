const express = require("express");
const Blog = require("../models/blog.model");
const { getAllBlogs, getBlogById, postNewBlog, deleteBlogById, updateBlogById } = require("../controllers/blog.controllers");
const router = express.Router();



//get all blogs
router.get("/", getAllBlogs);

//get a single blog by id
router.get("/:id", getBlogById)

//post a new blog
router.post("/add-post", postNewBlog);

//delete a blog
router.delete('/:id', deleteBlogById)

//update a blog
router.put('/:id', updateBlogById)

module.exports = router;
