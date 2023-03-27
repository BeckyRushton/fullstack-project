import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import HomepageContainer from "../../containers/HomepageContainer/HomepageContainer";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./Home.scss";

const Home = ({ bookData, setBookData, handleSearch, handleSearchGenres }) => {
  return (
    <div className="homepage">
      <PageHeader bookData={bookData} handleSearch={handleSearch} />
      <div className="homepage-body">
        <div className="homepage-body__nav">
          <NavContainer
            bookData={bookData}
            setBookData={setBookData}
            handleSearchGenres={handleSearchGenres}
          />
        </div>
        <div className="homepage-body__home">
          <HomepageContainer bookData={bookData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
