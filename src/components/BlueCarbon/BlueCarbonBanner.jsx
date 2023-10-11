import React from "react";
import background from "../../../src/images/agriculture-main-banner.jpg";
import Banner from "../BannerForAllPages/Banner";

const BlueCarbonBanner = () => {
  return (
    <Banner
      backgroundImage={background}
      title="Blue Carbon"
      description="Blue carbon stored in coastal ecosystems like seagrasses, mangroves, and tidal marshes act as a potent carbon sink. "
      buttonText="Register Your Interest"
    />
  );
};

export default BlueCarbonBanner;
