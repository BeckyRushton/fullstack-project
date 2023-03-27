import React from "react";
import "./AddBook.scss";
import PageHeader from "../../components/PageHeader/PageHeader";

const AddBook = () => {
  return (
    <div className="addbook-container">
      <PageHeader />
      <div className="addbook-container__home"></div>

      <div className="addbook-container__body"></div>
    </div>
  );
};

export default AddBook;
