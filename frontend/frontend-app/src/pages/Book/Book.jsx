import { useParams } from "react-router-dom";
import React from "react";
import "./Book.scss";
import PageHeader from "../../components/PageHeader/PageHeader";

const Book = ({ bookData }) => {
  const { title } = useParams();
  const targetArr = bookData.filter((book) => {
    if (book.title === title) {
      return true;
    } else {
      return false;
    }
  });
  const targetObj = targetArr[0];
  return (
    <div className="book-info">
      <PageHeader />
      <div className="book-info__body">
        <div className="book-info__stats">
          <div className="book-info__stats--title">
            Title: {targetObj.title}
          </div>
          <div className="book-info__stats--author">
            Author: {targetObj.author}
          </div>
          <div className="book-info__stats--published">
            Published: {targetObj.published}
          </div>
          <div className="book-info__stats--edition">
            Edition: {targetObj.edition}
          </div>
          <div className="book-info__stats--pages">
            Pages: {targetObj.pages}
          </div>
          <div className="book-info__stats--blurb">{targetObj.blurb}</div>
        </div>
        <div className="book-info__image">
          <img
            src={targetObj.image}
            alt="book-cover"
            className="book-info__image--image"
          />
        </div>
        <div className="book-info__quotes">
          <div className="book-info__quotes--title">
            Quotes from {targetObj.title}:
          </div>

          <div className="book-info__quotes--quote1">
            "{targetObj.quotes[0]}"
          </div>
          <div className="book-info__quotes--quote2">
            "{targetObj.quotes[1]}"
          </div>
          <div className="book-info__quotes--quote3">
            "{targetObj.quotes[2]}"
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
