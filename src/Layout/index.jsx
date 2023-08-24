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
import ListProduct from "../components/ListProduct/ListProduct";
import ProductDetail from "../components/ProductDetail/ProductDetail";

const DefaultLayot = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayot;
