import React from "react";
import Banner from "./Banner";
import OurMission from "./OurMission";
import { Helmet } from "react-helmet-async";
import Gardeners from "../../components/Gardeners/Gardeners";
import { useLoaderData } from "react-router";
import TrendingTips from "../../components/TrendingTips/TrendingTips";
import CostumerReview from "../../components/CostumerReview/CostumerReview";

const Home = () => {
  const gardenerData = useLoaderData();

  return (
    <div className="space-y-10">
      <Helmet>
        <title>GrowTogether | Home</title>
      </Helmet>
      <Banner></Banner>
      <Gardeners gardenerData={gardenerData}></Gardeners>
      <TrendingTips></TrendingTips>
      <OurMission></OurMission>
      <CostumerReview></CostumerReview>
    </div>
  );
};

export default Home;
