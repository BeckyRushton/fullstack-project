import React from "react";
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
        <img className="book-image" src={book.image} alt="book-cover" />
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Published: {book.published}</p>
        <p>Edition: {book.edition}</p>
        <p>Pages: {book.pages}</p>
        <p>Genre: {bookGenres}</p>
        <p>Blurb: {book.blurb}</p>
        <div>Quotes: {bookQuotes}</div>
      </div>
    </div>
  );
};

export default BookCard;
