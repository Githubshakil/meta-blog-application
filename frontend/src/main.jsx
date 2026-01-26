import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Home from "./pages/home/Home.jsx";
import Blogs from "./pages/blogs/Blogs.jsx";
import About from "./pages/about/about.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
