import { useState } from "react";

import "./App.css";

import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <div>
      <Navbar />
    </div>
      <Outlet />
      <footer>Footer</footer>
      

    </>
  );
}

export default App;
