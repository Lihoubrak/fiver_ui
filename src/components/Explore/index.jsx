import React from "react";
import "./Explore.scss";
const ItemsExplore = ({ icon, title }) => {
  return (
    <div className="item">
      <img src={icon} alt="" />
      <div className="line"></div>
      <span>{title}</span>
    </div>
  );
};

export default ItemsExplore;
