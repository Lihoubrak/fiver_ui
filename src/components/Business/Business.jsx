import React from "react";
import "./Business.scss";
import { FiverrLogo, TickActiveLogo } from "../../icons";
const Business = () => {
  return (
    <div className="feature-dark">
      <div className="feature-left">
        <div className="logo">
          <FiverrLogo />
        </div>
        <h1>Advanced solutions and professional talent for businesses</h1>
        <ul className="list-feature">
          <li className="item-feature">
            <span className="icon-tick">
              <TickActiveLogo />
            </span>
            <div className="item-text">
              <b>Fiverr Pro</b>
              <p>
                Access top freelancers and professional business tools for any
                project
              </p>
            </div>
          </li>
          <li className="item-feature">
            <span className="icon-tick">
              <TickActiveLogo />
            </span>
            <div className="item-text">
              <b>Fiverr Certified</b>
              <p>Build your own branded marketplace of certified experts</p>
            </div>
          </li>
          <li className="item-feature">
            <span className="icon-tick">
              <TickActiveLogo />
            </span>
            <div className="item-text">
              <b>Fiverr Enterprise</b>
              <p>
                Manage your freelance workforce and onboard additional talent
                with an end-to-end SaaS solution
              </p>
            </div>
          </li>
        </ul>
        <button className="btn-learnMore">Learn more</button>
      </div>
      <div className="feature-right">
        <img
          className="feature-image"
          alt="Fiverr Pro freelancers"
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png"
        />
      </div>
    </div>
  );
};

export default Business;
