import React from "react";
import "./Search.scss";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <input
        id="searchbar"
        type="text"
        placeholder="Search books here..."
        onInput={handleSearch}
      />
    </div>
  );
};

export default Search;
