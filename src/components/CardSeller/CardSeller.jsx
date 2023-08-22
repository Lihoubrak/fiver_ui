import React from "react";
import "./CardSeller.scss";
const CardSeller = ({ img, avatar, title, nickname }) => {
  return (
    <div className="seller">
      <div className="seller-item">
        <img src={img} alt="" className="seller-img" />

        <div className="seller-info">
          <div className="info">
            <div>
              <img src={avatar} alt="" className="seller-avatar" />
            </div>
            <div>
              <h2>{title}</h2>
              <span>{nickname}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSeller;
