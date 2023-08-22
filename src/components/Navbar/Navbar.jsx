import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Category from "../Category/Category";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const scrollActive = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollActive);
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);
  return (
    <>
      <div className={isActive ? "navbar active" : "navbar"}>
        <div className="branch-name">
          <span>Fiver</span>
          <span className="dot">.</span>
        </div>
        <div>
          <ul className="link">
            <li>Liverr Business</li>
            <li>Explore</li>
            <li>English</li>
            <li className="user-info">
              <img
                className="avatar"
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
                alt=""
              />
              <span>Anna</span>
            </li>
          </ul>
        </div>
      </div>
      {isActive && <Category />}
    </>
  );
};

export default Navbar;
