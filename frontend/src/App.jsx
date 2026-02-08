import { useState } from "react";

import "./App.css";

import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeContext } from "./context/ThemContext";
import { BlogProvider } from "./context/BlogContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <BlogProvider>
        <div>
      <Navbar />
    </div>
      <main className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
      </BlogProvider>

    </ThemeContext.Provider>
    
      

    </>
  );
}

export default App;
