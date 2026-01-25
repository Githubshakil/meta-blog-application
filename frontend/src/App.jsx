import { useState } from "react";

import "./App.css";

import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Outlet />
      <div>home page</div>

    </>
  );
}

export default App;
