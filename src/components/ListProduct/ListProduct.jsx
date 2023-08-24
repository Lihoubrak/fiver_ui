import React, { useEffect } from "react";
import "./ListProduct.scss";
import { gigs } from "../../slideData";
import { Link } from "react-router-dom";

const ListProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="gigs">
      <span className="breadcrumbs">
        Liverr &gt; Graphics &amp; Design &gt;
      </span>
      <h1>AI Artists</h1>
      <p className="sub">
        Explore the boundaries of art and technology with Liverr's AI artists
      </p>
      <div className="menu">
        <div className="left">
          <span>Budget</span>
          <input type="number" placeholder="min" />
          <input type="number" placeholder="max" />
          <button>Apply</button>
        </div>
        <div className="right">
          <span className="sortBy">Sort by</span>
          <span className="sortType">Best Selling</span>
          <img src="./img/down.png" alt="" />
          <div className="rightMenu">
            <span>Newest</span>
            <span>Popular</span>
          </div>
        </div>
      </div>
      <div className="container">
        {gigs.map((item) => (
          <Link to={`/hello`} key={item.id}>
            <div className="gigCard">
              <img src={item.img} alt="" />
              <div className="info-card">
                <div className="user-info">
                  <img src={item.pp} alt="" className="user-image" />
                  <span>{item.username}</span>
                </div>
                <p>{item.desc}</p>
                <div className="star">
                  <img src="./img/star.png" alt="" />
                  <span>{item.star}</span>
                </div>
              </div>
              <div className="detail">
                <img src="./img/heart.png" alt="" />
                <div className="price">
                  <span>STARTING AT</span>
                  <h2>
                    $ {item.price}
                    <sup>99</sup>
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
