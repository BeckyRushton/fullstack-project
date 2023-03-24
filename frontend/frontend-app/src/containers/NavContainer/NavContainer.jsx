import React from "react";
import FilterSection from "../../components/FilterSection/FilterSection";
import "./NavContainer.scss";

const NavContainer = ({ bookData, setBookData }) => {
  return (
    <div className="nav">
      <FilterSection bookData={bookData} setBookData={setBookData} />
    </div>
  );
};

export default NavContainer;
