import React from "react";
import "./Banner.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ClearIcon } from "../../icons";
const Banner = () => {
  return (
    <div className="banner">
      <div className="feature">
        <h1>Find the perfect freelance services for your business</h1>
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="text"
            placeholder='Try "Building Mobile App"'
            className="search-input"
          />
          <div className="clear">
            <ClearIcon />
          </div>
          <button className="btn-search">Search</button>
        </div>
        <div className="feature-popular">
          <span className="popular">Popular:</span>
          <button className="btn">Web Design</button>
          <button className="btn">WordPress</button>
          <button className="btn">Logo Design</button>
          <button className="btn">Ai Services</button>
        </div>
      </div>
      <div class="right">
        <img src="./img/man.png" alt="" className="image=banner" />
      </div>
    </div>
  );
};

export default Banner;
