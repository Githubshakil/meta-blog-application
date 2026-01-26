import React, { useEffect, useState } from "react";

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
        <div>
            {
                blogs.map((blogs, idx) => (
                    <div key={idx}>
                        <h1>{blogs.title}</h1>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  );
};

export default BlogList;
