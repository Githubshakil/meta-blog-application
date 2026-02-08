import { useState } from "react";

import "./App.css";

import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContext } from "./context/ThemContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
<div>
      <Navbar />
    </div>
      <main className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </ThemeContext.Provider>
    
      

    </>
  );
}

export default App;
