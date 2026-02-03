import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blog data: " + error));
  }, []);

  console.log(blogs);
  return (
    <section className=" container max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-2xl font-bold mb-6">Manage Your Blogs</h2>

      <div>
        {blogs.length > 0 ? (
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                  <p className="text-sm font-normal leading-none text-slate-300">
                    Title
                  </p>
                </th>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                  <p className="text-sm font-normal leading-none text-slate-300">
                    Author
                  </p>
                </th>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                  <p className="text-sm font-normal leading-none text-slate-300">
                    Date
                  </p>
                </th>
                <th className="p-4 border-b border-slate-600 bg-slate-700">
                  <p className="text-sm font-normal leading-none text-slate-300">
                    Actions
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, idx) => (
                <tr key={idx} className="hover:bg-slate-700">
                  <td className="p-4 border-b border-slate-700 bg-slate-900">
                    <p className="text-sm text-slate-100 font-semibold">
                      <span>{idx + 1} . </span>
                      {blog.title}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-700 bg-slate-800">
                    <p className="text-sm text-slate-300">{blog.author.name}</p>
                  </td>
                  <td className="p-4 border-b border-slate-700 bg-slate-900">
                    <p className="text-sm text-slate-300">
                      {blog?.date ? (
                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                      ) : (
                        <span>
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                      )}
                    </p>
                  </td>
                  <td className="p-4 border-b text-sm border-slate-700 bg-slate-800 flex gap-2 flex-wrap justify-center">
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-colors"
                    >
                      View
                    </Link>
                    <Link
                      to={`/blogs/edit/${blog._id}`}
                      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition-colors"
                    >
                      Edit
                    </Link>
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors"
                    >
                     <button>Delete</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </section>
  );
};

export default ManageBlogs;
