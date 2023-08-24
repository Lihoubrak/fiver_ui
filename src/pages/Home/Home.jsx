import React from "react";
import Banner from "../../components/Banner/Banner";
import Sponser from "../../components/Sponser/Sponser";
import Slide from "../../components/Slide/Slide";
import SellingProposition from "../../components/SellingProposition";
import Explore from "../../components/Explore/Explore";
import Business from "../../components/Business/Business";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sponser />
      <Slide slidesToShow={4} arrowsScroll={4} />
      <SellingProposition />
      <Explore />
      <Business />
      <Slide cardSeller slidesToShow={4} arrowsScroll={4} />
    </div>
  );
};

export default Home;
