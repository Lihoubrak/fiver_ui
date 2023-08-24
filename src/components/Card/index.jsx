import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ image, title, desc }) => {
  return (
    <Link to={`/gigs/${title}`} className="card">
      <img className="card-image" src={image} alt="" />
      <span className="desc">{desc}</span>
      <span className="title">{title}</span>
    </Link>
  );
};

export default Card;
