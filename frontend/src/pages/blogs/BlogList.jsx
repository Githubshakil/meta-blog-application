import React, { useContext, useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { BlogContext } from "../../context/BlogContext";

const BlogList = () => {
  const {searchTerm} = useContext(BlogContext)
  const [blogs, setBlogs] = useState([]);
  const [showBlogs, setShowBlogs] = useState(6);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data.blogs))
      .catch((error) => console.error("Error fetching blog data: " + error));
  }, []);

  console.log(blogs)

  //filter blogs based on our title description author name

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
  );
  // handle view more blog

  const handleMoreBlogs = () => {
    setShowBlogs((prev) => prev + 3);
  };
  return (
    <>
      <div className=" container mx-auto">
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredBlogs.slice(0,showBlogs).map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>

        {
            showBlogs < filteredBlogs.length && (
                <div onClick={handleMoreBlogs} className="flex justify-center items-center mt-8 mb-5">
                    <button className="bg-secondary text-white hover:bg-secondary/80 font-extrabold flex items-center justify-center px-6 py-2 gap-1 transition-colors duration-200 rounded-md">View More</button>
                </div>
            )
        }
      </div>
    </>
  );
};

export default BlogList;
