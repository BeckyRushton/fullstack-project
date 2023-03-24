import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import "./HomepageContainer.scss";

const HomepageContainer = ({ bookData }) => {
  const populateBooks = bookData.map((book, index) => {
    return (
      <div key={index}>
        <BookCard book={book} />
      </div>
    );
  });

  return <div className="homepage">{populateBooks}</div>;
};

export default HomepageContainer;
