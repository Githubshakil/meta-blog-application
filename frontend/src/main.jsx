import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Home from "./pages/home/Home.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import About from "./pages/about/about.jsx";
import Contact from "./pages/contact/Contact.jsx";
import AddBlog from "./pages/blogs/addBlog/AddBlog.jsx";
import ManageBlogs from "./pages/blogs/manageBlog/ManageBlogs.jsx";
import UpdateBlogs from "./pages/blogs/manageBlog/UpdateBlogs.jsx";
import BlogDetails from "./pages/blogs/BlogDetails.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/manage-blogs" element={<ManageBlogs />} />
        <Route path="/blogs/edit/:id" element={<UpdateBlogs/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
