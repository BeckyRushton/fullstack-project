import React from "react";
import "./PageHeader.scss";
import Search from "../Search/Search";
import Menu from "../Menu/Menu";

const PageHeader = () => {
  return (
    <div className="header">
      PageHeader
      <Search />
      <Menu />
    </div>
  );
};

export default PageHeader;
