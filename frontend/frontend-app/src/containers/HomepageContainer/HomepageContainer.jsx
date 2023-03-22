import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import "./HomepageContainer.scss";

const HomepageContainer = ({ bookData }) => {
  return (
    <div className="homepage">
      HomepageContainer
      <BookCard bookData={bookData} />
    </div>
  );
};

export default HomepageContainer;
