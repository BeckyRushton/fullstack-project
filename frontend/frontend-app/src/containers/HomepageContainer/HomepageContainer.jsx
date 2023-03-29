import React from "react";
import BookCard from "../../components/BookCard/BookCard";
import "./HomepageContainer.scss";
import Bookshelf from "../../assets/Images/books-shelf.png";
import Carousel from "react-elastic-carousel";

const HomepageContainer = ({ bookData }) => {
  const populateBooks = bookData.map((book, index) => {
    return (
      <div className="book-shelves">
        <div className="book-shelves__top">
          <img
            className="book-shelves__top--image"
            src={Bookshelf}
            alt="shelfOfBooks"
          />
        </div>

        <div className="book-shelves__middle">
          <Carousel>
            <p>One</p>
            <p>Two</p>
            <p>Three</p>
          </Carousel>
          <div key={index}>
            <BookCard book={book} />
          </div>
        </div>

        <div className="book-shelves__bottom">
          <img
            src={Bookshelf}
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
