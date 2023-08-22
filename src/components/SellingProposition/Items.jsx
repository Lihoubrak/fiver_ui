import React from "react";
import "./SellingProposition.scss";
const Items = ({ icon, title, desc }) => {
  return (
    <ul className="items">
      <li>
        <h6 className="title-img">
          <span className="icon-tick">{icon}</span>
          {title}
        </h6>
        <p>{desc}</p>
      </li>
    </ul>
  );
};

export default Items;
