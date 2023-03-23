import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import HomepageContainer from "../../containers/HomepageContainer/HomepageContainer";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./Home.scss";

const Home = ({ bookData }) => {
  return (
    <div>
      HOMEPAGE
      <PageHeader />
      <NavContainer />
      <HomepageContainer bookData={bookData} />
    </div>
  );
};

export default Home;
