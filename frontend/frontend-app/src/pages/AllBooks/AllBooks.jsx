import React from "react";
import "./AllBooks.scss";
import BookCard from "../../components/BookCard/BookCard";
import PageHeader from "../../components/PageHeader/PageHeader";

const AllBooks = ({ bookData }) => {
  const populateBooks = bookData.map((book, index) => {
    return (
      <div key={index}>
        <BookCard book={book} />
      </div>
    );
  });

  return (
    <div>
      <PageHeader />
      <div className="allbooks-container">
        <div className="allbooks-container__body">{populateBooks}</div>
      </div>
    </div>
  );
};

export default AllBooks;
