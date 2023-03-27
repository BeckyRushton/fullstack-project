import React from "react";
import FilterSection from "../../components/FilterSection/FilterSection";
import "./NavContainer.scss";
import Search from "../../components/Search/Search";

const NavContainer = ({
  bookData,
  setBookData,
  handleSearchGenres,
  handleSearch,
}) => {
  return (
    <div className="nav">
      <Search handleSearch={handleSearch} />
      <FilterSection
        bookData={bookData}
        setBookData={setBookData}
        handleSearchGenres={handleSearchGenres}
      />
    </div>
  );
};

export default NavContainer;
