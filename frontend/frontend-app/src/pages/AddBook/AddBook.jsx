import { Link } from "react-router-dom";
import React from "react";
import "./AddBook.scss";
import Button from "../../components/Button/Button";

const AddBook = () => {
  return (
    <div>
      AddBook
      <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
        <Button buttonText={"Home"}></Button>
      </Link>
    </div>
  );
};

export default AddBook;
