import { Link, useParams } from "react-router-dom";
import React from "react";
import "./Book.scss";
import Button from "../../components/Button/Button";

const Book = (bookData) => {
  const { title } = useParams();
  const targetArr = bookData.filter((book) => {
    if (book.title === title) {
      return true;
    }
  });
  const targetObj = targetArr[0];
  return (
    <div className="book-info">
      <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
        <Button buttonText={"Home"}></Button>
      </Link>
      <div className="book-info__title">{targetObj.title}</div>
      <div className="book-info__author">{targetObj.author}</div>
      <div className="book-info__published">{targetObj.published}</div>
      <div className="book-info__edition">{targetObj.edition}</div>
      <div className="book-info__pages">{targetObj.pages}</div>
      <div className="book-info__blurb">{targetObj.blurb}</div>
      <div className="book-info__quotes">{targetObj.quotes}</div>
      <img
        src={targetObj.image}
        alt="book-cover"
        className="book-info__image"
      />
    </div>
  );
};

export default Book;
