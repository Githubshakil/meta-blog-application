import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
    .then((response) => response.json())
    .then(data => setBlogs(data))
    .catch(error => console.error("Error fetching blog data: " + error))
  }, []);

  console.log("Blogs:", blogs)
  return (
    <>
      <div className=" container mx-auto">
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {
                blogs.map((blog, idx) => (
                    <BlogCard key={idx} blog={blog}/>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default BlogList;
