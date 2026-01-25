import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className=" relative">
        <input
          type="text"
          placeholder="search..."
          className="bg-[#f4f4f5] py-2 pl-4 pr-4 focus:outline-none rounded-full"
        />
        <button >
          <FaSearch className=" absolute right-3 top-3 hover:text-secondary cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default Search;
