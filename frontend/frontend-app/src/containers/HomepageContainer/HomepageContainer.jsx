import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import "./HomepageContainer.scss";
import ShelfOfBooks from "../../assets/Images/books-shelf.png";

const HomepageContainer = ({ bookData }) => {
  const populateBooks = bookData.map((book, index) => {
    return (
      <div className="book-shelves">
        <div className="book-shelves__top">
          <img
            className="book-shelves__top--image"
            src={ShelfOfBooks}
            alt="shelfOfBooks"
          />
        </div>

        <div className="book-shelves__middle">
          <div key={index}>
            <BookCard book={book} />
          </div>
        </div>

        <div className="book-shelves__bottom">
          <img
            src={ShelfOfBooks}
            className="book-shelves__bottom--image"
            alt="shelfOfBooks"
          />
        </div>
      </div>
    );
  });

  return <div className="homepage">{populateBooks}</div>;
};

export default HomepageContainer;
