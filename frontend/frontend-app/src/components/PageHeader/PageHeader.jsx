import React from "react";
import "./PageHeader.scss";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";

const PageHeader = ({ handleSearch }) => {
  return (
    <div className="header">
      <div className="header__title">
        <h1 className="header__title--name">Becky's Bookcase</h1>
      </div>
      <div className="header__options">
        <Menu />
        <Search handleSearch={handleSearch} />
      </div>
    </div>
  );
};

export default PageHeader;
