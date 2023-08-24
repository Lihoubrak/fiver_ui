import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const UpdatedMessage = () => {
  return (
    <div className="updated-message">
      <div className="updated-container">
        <span className="updated-breadcrumbs">
          <Link to="/messages">Messages</Link> &gt; John Doe &gt;
        </span>
        <div className="updated-messages">
          <div className="updated-item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="updated-item updated-owner">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>
        <hr className="updated-hr" />
        <div className="updated-write">
          <textarea
            className="updated-textarea"
            placeholder="Write a message"
          />
          <button className="updated-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default UpdatedMessage;