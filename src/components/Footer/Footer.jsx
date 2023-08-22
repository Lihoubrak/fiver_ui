import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="category">
          <h3>Categories</h3>
          <li>Graphics & Design</li>
          <li>Digital Marketing</li>
          <li>Writing & Translation</li>
          <li>Video & Animation</li>
          <li>Music & Audio</li>
          <li>Programming & Tech</li>
          <li>Data</li>
          <li>Business</li>
          <li>Lifestyle</li>
          <li>Photography</li>
          <li>Sitemap</li>
        </ul>
        <ul className="about">
          <h3>About</h3>
          <li>Press & News</li>
          <li>Partnerships</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Intellectual Property Claims</li>
          <li>Investor Relations</li>
          <li>Contact Sales</li>
        </ul>
        <ul className="support">
          <h3>Support</h3>
          <li>Help & Support</li>
          <li>Trust & Safety</li>
          <li>Selling on Liverr</li>
          <li>Buying on Liverr</li>
        </ul>
        <ul className="cummunity">
          <h3>Community</h3>
          <li>Customer Success Stories</li>
          <li>Community hub</li>
          <li>Forum</li>
          <li>Events</li>
          <li>Blog</li>
          <li>Influencers</li>
          <li>Affiliates</li>
          <li>Podcast</li>
          <li>Invite a Friend</li>
          <li>Become a Seller</li>
          <li>Community Standards</li>
        </ul>
        <ul className="more">
          <h3>More From Fiverr</h3>
          <li>Liverr Business</li>
          <li>Liverr Pro</li>
          <li>Liverr Logo Maker</li>
          <li>Liverr Guides</li>
          <li>Get Inspired</li>
          <li>Liverr Select</li>
          <li>ClearVoice</li>
          <li>Liverr Workspace</li>
          <li>Learn</li>
          <li>Working Not Working</li>
        </ul>
      </div>
      <div className="bottom">
        <div className="lefts">
          <h2>liverr</h2>
          <span>© Liverr International Ltd. 2023</span>
        </div>
        <div className="right">
          <div className="social">
            <img src="/img/twitter.png" alt="" />
            <img src="/img/facebook.png" alt="" />
            <img src="/img/linkedin.png" alt="" />
            <img src="/img/pinterest.png" alt="" />
            <img src="/img/instagram.png" alt="" />
          </div>
          <div className="link">
            <img src="/img/language.png" alt="" />
            <span>English</span>
          </div>
          <div className="link">
            <img src="/img/coin.png" alt="" />
            <span>USD</span>
          </div>
          <img src="/img/accessibility.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
