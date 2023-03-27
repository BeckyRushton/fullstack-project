import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./BookCard.scss";

const BookCard = ({ book }) => {
  const bookQuotes = book.quotes.map((quote) => {
    return <p>"{quote}"</p>;
  });

  const bookGenres = book.genre
    .map((uniqueGenre) => {
      return uniqueGenre.charAt(0).toUpperCase() + uniqueGenre.slice(1);
    })
    .join(", ");

  return (
    <div className="book-container">
      <div className="book-stats">
        <div className="book-stats__top">
          <img
            className="book-stats__top--image"
            src={book.image}
            alt="book-cover"
          />
        </div>
        <div className="book-stats__bottom">
          <p className="book-stats__bottom--title">Title: {book.title}</p>
          <p className="book-stats__bottom--author">Author: {book.author}</p>
          <p className="book-stats__bottom--published">
            Published: {book.published}
          </p>
          <p className="book-stats__bottom--edition">Edition: {book.edition}</p>
          <p className="book-stats__bottom--pages">Pages: {book.pages}</p>
          <p className="book-stats__bottom--genre">Genre: {bookGenres}</p>
          <Link
            to={"/book/{title}"}
            className="book-stats__bottom--button"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Button buttonText={"Find out more..."} />
          </Link>

          <p className="book-stats__bottom--blurb">Blurb: {book.blurb}</p>
          <div className="book-stats__bottom--quotes">Quotes: {bookQuotes}</div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
