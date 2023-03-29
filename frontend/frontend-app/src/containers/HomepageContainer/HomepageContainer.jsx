import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import "./HomepageContainer.scss";
import Bookshelf from "../../assets/Images/books-shelves.png";

const HomepageContainer = ({ bookData }) => {
  const populateBooks = bookData.map((book, index) => {
    return (
      <div key={index}>
        <BookCard book={book} />
      </div>
    );
  });

  return (
    <div className="homepage">
      <div className="book-shelves">
        <div className="book-shelves__top">
          <img
            className="book-shelves__top--image"
            src={Bookshelf}
            alt="shelfOfBooks"
          />
        </div>
        <div className="book-shelves__middle">{populateBooks}</div>
        <div className="book-shelves__bottom">
          <img
            src={Bookshelf}
            className="book-shelves__bottom--image"
            alt="shelfOfBooks"
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageContainer;
