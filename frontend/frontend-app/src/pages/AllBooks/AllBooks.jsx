import React from "react";
import "./AllBooks.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
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
        <div className="allbooks-container__home">
          <Link
            to={"/"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Button buttonText={"Home"}></Button>
          </Link>
        </div>
        <div className="allbooks-container__body">{populateBooks}</div>
      </div>
    </div>
  );
};

export default AllBooks;
