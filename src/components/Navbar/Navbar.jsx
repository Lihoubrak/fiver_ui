import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import Category from "../Category/Category";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const scrollActive = () => {
    window.scrollY > 0 ? setIsActive(true) : setIsActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollActive);
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <>
      <div
        className={isActive || pathname !== "/" ? "navbar active" : "navbar"}
      >
        <div className="branch-name">
          <span>Fiver</span>
          <span className="dot">.</span>
        </div>
        <div>
          <ul className="link">
            <li>Liverr Business</li>
            <li>Explore</li>
            <li>English</li>
            <li className="user-info" onClick={() => setOpen(!open)}>
              <img
                className="avatar"
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      {(isActive || pathname !== "/") && <Category />}
    </>
  );
};

export default Navbar;
