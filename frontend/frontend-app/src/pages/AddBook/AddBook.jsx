import React from "react";
import "./AddBook.scss";
import PageHeader from "../../components/PageHeader/PageHeader";
import Footer from "../../components/Footer/Footer";

const AddBook = () => {
  return (
    <div className="addbook-container">
      <PageHeader />
      <div className="addbook-container__home"></div>

      <div className="addbook-container__body"></div>
      <Footer />
    </div>
  );
};

export default AddBook;
