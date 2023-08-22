import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
import Card from "../Card";
import { SellerData, SliderData } from "../../slideData";
import CardSeller from "../CardSeller/CardSeller";

const Slide = ({ cardSeller, slidesToShow, arrowsScroll }) => {
  return (
    <div className="Slide">
      {cardSeller ? (
        <h1>Inspiring work made on Fiverr</h1>
      ) : (
        <h1>Popular services</h1>
      )}
      <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
        {cardSeller
          ? SellerData.map((item, index) => (
              <CardSeller
                img={item.img}
                avatar={item.pp}
                title={item.cat}
                nickname={item.username}
                key={index}
              />
            ))
          : SliderData.map((item, index) => (
              <Card
                image={item.img}
                desc={item.desc}
                title={item.title}
                key={index}
              />
            ))}
      </Slider>
    </div>
  );
};

export default Slide;
