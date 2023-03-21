import { Link } from "react-router-dom";
import React from "react";
import "./Book.scss";
import Button from "../../components/Button/Button";

const Book = () => {
  return (
    <div>
      Book
      <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
        <Button buttonText={"Home"}></Button>
      </Link>
    </div>
  );
};

export default Book;
