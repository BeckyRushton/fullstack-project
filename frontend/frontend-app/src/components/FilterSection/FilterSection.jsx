import React, { useEffect } from "react";
import "./FilterSection.scss";

const FilterSection = ({ bookData, setBookData }) => {
  const filteredBookData = bookData.filter((book) => {
    if (book.genre.contains("fantasy")) {
      return true;
    }
  });

  useEffect(() => {
    setBookData(filteredBookData);
  }, []);
  return <div>FilterSection</div>;
};

export default FilterSection;
