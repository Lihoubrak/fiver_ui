import React from "react";
import "./Card.scss";
const Card = ({ image, title, desc }) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt="" />
      <span className="desc">{desc}</span>
      <span className="title">{title}</span>
    </div>
  );
};

export default Card;
