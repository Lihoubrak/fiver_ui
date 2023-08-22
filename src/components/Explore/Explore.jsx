import React from "react";
import "./Explore.scss";
import ItemsExplore from ".";
const Explore = () => {
  return (
    <div className="explore">
      <h1>Explore the marketplace</h1>
      <div className="items">
        <ItemsExplore
          icon="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
          title="Graphics & Design"
        />
        <ItemsExplore
          icon="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
          title="Digital Marketing"
        />
        <ItemsExplore
          icon="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
          title="Writing & Translation"
        />
        <ItemsExplore
          icon="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
          title="Video & Animation"
        />
        <ItemsExplore
          icon="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
          title="Music & Audio"
        />
        <ItemsExplore
          icon="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
          title="Programming & Tech"
        />
        <ItemsExplore
          icon="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
          title="Business"
        />
        <ItemsExplore
          icon="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
          title="Lifestyle"
        />
        <ItemsExplore
          icon="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
          title="Data"
        />
        <ItemsExplore
          icon="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
          title="Photography"
        />
      </div>
    </div>
  );
};

export default Explore;
