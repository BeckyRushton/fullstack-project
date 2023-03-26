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
        <NavContainer
          bookData={bookData}
          setBookData={setBookData}
          handleSearchGenres={handleSearchGenres}
        />
        <HomepageContainer bookData={bookData} />
      </div>
    </div>
  );
};

export default Home;
