import React from "react";
import FilterSection from "../../components/FilterSection/FilterSection";
import "./NavContainer.scss";

const NavContainer = ({ bookData, setBookData, handleSearchGenres }) => {
  return (
    <div className="nav">
      <FilterSection
        bookData={bookData}
        setBookData={setBookData}
        handleSearchGenres={handleSearchGenres}
      />
    </div>
  );
};

export default NavContainer;
