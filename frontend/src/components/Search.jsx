import React, { useState } from "react";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { BlogContext } from "../context/BlogContext";

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(BlogContext);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setSearchTerm(e.target.value); // Update the search term in the context as the user types
  };

  return (
    <>
      <div className=" relative">
        <input
          type="text"
          placeholder="search..."
          className="bg-[#f4f4f5] py-2 pl-4 pr-4 focus:outline-none rounded-full"
          onChange={handleChange}
        />
        <button>
          <FaSearch
            onClick={handleSearch}
            className=" absolute right-3 top-3 hover:text-secondary cursor-pointer"
          />
        </button>
      </div>
    </>
  );
};

export default Search;
