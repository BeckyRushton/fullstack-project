import React from "react";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import HomepageContainer from "../../containers/HomepageContainer/HomepageContainer";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./Home.scss";

const Home = ({ bookData, setBookData, handleSearch, handleSearchGenres }) => {
  return (
    <div className="homepage">
      <PageHeader bookData={bookData} />
      <div className="homepage-body">
        <div className="homepage-body__nav">
          <NavContainer
            bookData={bookData}
            setBookData={setBookData}
            handleSearchGenres={handleSearchGenres}
            handleSearch={handleSearch}
          />
        </div>
        <div className="homepage-body__home">
          <HomepageContainer bookData={bookData} />
        </div>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
