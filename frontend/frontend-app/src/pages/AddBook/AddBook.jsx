import { Link } from "react-router-dom";
import React from "react";
import "./AddBook.scss";
import Button from "../../components/Button/Button";
import PageHeader from "../../components/PageHeader/PageHeader";
import HomepageContainer from "../../containers/HomepageContainer/HomepageContainer";

const AddBook = () => {
  return (
    <div className="addbook-container">
      <PageHeader />
      <div className="addbook-container__home">
        <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button buttonText={"Home"}></Button>
        </Link>
      </div>

      <div className="addbook-container__body"></div>
    </div>
  );
};

export default AddBook;
