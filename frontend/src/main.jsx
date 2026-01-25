
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";



createRoot(document.getElementById("root")).render(
 
   <BrowserRouter>
    <Routes  >
      <Route path="/" element={<App />}>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/blogs" element={<div>Blogs</div>} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Route>
    </Routes>
  </BrowserRouter>

);
