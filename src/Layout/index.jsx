import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Sponser from "../components/Sponser/Sponser";
import Slide from "../components/Slide/Slide";
import SellingProposition from "../components/SellingProposition";
import Explore from "../components/Explore/Explore";
import Business from "../components/Business/Business";
import CardSeller from "../components/CardSeller/CardSeller";
import Footer from "../components/Footer/Footer";

const DefaultLayot = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Sponser />
      <Slide slidesToShow={5} arrowsScroll={5} />
      <SellingProposition />
      <Explore />
      <Business />
      <Slide cardSeller slidesToShow={4} arrowsScroll={4} />
      <Footer />
    </div>
  );
};

export default DefaultLayot;
