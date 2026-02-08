import React, { useContext } from "react";
import Banner from "../../components/Banner";
import BlogList from "./BlogList";
import { ThemeContext } from "../../context/ThemContext";

const Blogs = () => {
   const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <>
      <section className="container max-w-7xl mx-auto px-4 py-3">
        <Banner />
        <BlogList/>
      </section>
    </>
  );
};

export default Blogs;
