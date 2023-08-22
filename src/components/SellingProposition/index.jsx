import React from "react";
import "./SellingProposition.scss";
import { TickIcon } from "../../icons";
import Items from "./Items";
const SellingProposition = () => {
  return (
    <div className="selling-proposition">
      <div className="left">
        <h1>The best part? Everything.</h1>
        <Items
          icon={<TickIcon />}
          title=" Stick to your budget"
          desc="Find the right service for every price point. No hourly rates,
              just project-based pricing."
        />
        <Items
          icon={<TickIcon />}
          title=" Get quality work done quickly"
          desc="Hand your project over to a talented freelancer in minutes, get long-lasting results."
        />
        <Items
          icon={<TickIcon />}
          title=" Pay when you're happy"
          desc="Upfront quotes mean no surprises. Payments only get released when you approve."
        />
        <Items
          icon={<TickIcon />}
          title="Count on 24/7 support"
          desc="Our round-the-clock support team is available to help anytime, anywhere."
        />
      </div>
      <div className="right">
        <div class="picture-wrapper">
          <picture>
            <source
              media="(min-width: 1160px)"
              srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
            />
            <source
              media="(min-width: 900px)"
              srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
            />
            <source
              media="(min-width: 600px)"
              srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_900,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
            />
            <source
              media="(min-width: 361px)"
              srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
            />
            <source
              media="(max-width: 360px)"
              srcset="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png 2x"
            />
            <img
              alt="Video teaser image"
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
              loading="auto"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default SellingProposition;
