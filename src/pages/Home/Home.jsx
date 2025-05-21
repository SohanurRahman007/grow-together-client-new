import React from "react";
import Banner from "./Banner";
import OurMission from "./OurMission";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>GrowTogether | Home</title>
      </Helmet>
      <Banner></Banner>
      <OurMission></OurMission>
    </div>
  );
};

export default Home;
