import { useState } from "react";

import "./App.css";

import { Outlet } from "react-router";

function App() {
  return (
    <>
    <nav>Navbar</nav>
      <Outlet />
      <footer>Footer</footer>
      

    </>
  );
}

export default App;
