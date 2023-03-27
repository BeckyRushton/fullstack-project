import React from "react";
import "./PageHeader.scss";
import Menu from "../Menu/Menu";

const PageHeader = () => {
  return (
    <div className="header">
      <div className="header__title">
        <h1 className="header__title--name">Becky's Bookcase</h1>
      </div>

      <div className="header__options">
        <Menu />
      </div>
    </div>
  );
};

export default PageHeader;
