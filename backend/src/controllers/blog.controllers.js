//get all blogs

const Blog = require("../models/blog.model");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).send({ message: "Blogs fetched successfully!", blogs });
  } catch (error) {
    console.log("Error fatching all blog", error);
    res.status(500).send({ message: "Error fetching blogs", error });
  }
};

//get single blog by id
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res
        .status(404)
        .send({ message: "Blog not found with the provided id!" });
    }
    res.status(200).send({ message: "Blog fetched successfully!", blog });
  } catch (error) {
    console.log("Error fetching a blog by id", error);
    res.status(500).send({ message: "Error fetching blog by id", error });
  }
};

//post a new blog
const postNewBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      ...req.body,
    });
    const blog = await newBlog.save();
    res.status(200).send({ message: "Blog added successfully!", blog });
  } catch (error) {
    console.log("Error Creating a new blog", error);
    res.status(500).send({ message: "Error adding blog", error });
  }
};

//delete a blog
const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res
        .status(404)
        .send({ message: "Blog not found with the provided id!" });
    }
    res
      .status(200)
      .send({ message: "Blog deleted successfully!", deletedBlog });
  } catch (error) {
    console.log("Error deleting a blog", error);
    res.status(500).send({ message: "Error deleting blog", error });
  }
};

//update a blog
const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBlog) {
      return res
        .status(404)
        .send({ message: "Blog not found with the provided id!" });
    }
    res
      .status(200)
      .send({ message: "Blog updated successfully!", updatedBlog });
  } catch (error) {
    console.log("Error updating a blog", error);
    res.status(500).send({ message: "Error updating blog", error });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  postNewBlog,
  deleteBlogById,
  updateBlogById,
};
