import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import "./HomepageContainer.scss";

const HomepageContainer = ({ bookData }) => {
  const populateBooks = bookData.map((book) => {
    return <BookCard book={book} />;
  });

  return <div className="homepage">{populateBooks}</div>;
};

export default HomepageContainer;
