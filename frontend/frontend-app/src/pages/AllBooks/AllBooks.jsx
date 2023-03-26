import React from "react";
import "./AllBooks.scss";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const AllBooks = () => {
  return (
    <div>
      {" "}
      All books
      <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
        <Button buttonText={"Home"}></Button>
      </Link>
    </div>
  );
};

export default AllBooks;
