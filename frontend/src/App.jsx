import { useState } from "react";

import "./App.css";

import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div>
      <Navbar />
    </div>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
      

    </>
  );
}

export default App;
