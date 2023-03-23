import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import HomepageContainer from "../../containers/HomepageContainer/HomepageContainer";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      HOMEPAGE
      <PageHeader />
      <NavContainer />
      <HomepageContainer />
    </div>
  );
};

export default Home;
