import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <Link to={"/"} style={{ color: "inherit", textDecoration: "inherit" }}>
        <Button buttonText={"Home"}></Button>
      </Link>

      <Link
        to={"/allbooks"}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <Button buttonText={"See all books"} />
      </Link>
    </div>
  );
};

export default Menu;
