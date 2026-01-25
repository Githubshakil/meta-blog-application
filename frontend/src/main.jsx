
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Home from "./components/Home.jsx";


createRoot(document.getElementById("root")).render(
 
   <BrowserRouter>
    <Routes  >
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  </BrowserRouter>

);
