import React from "react";
import backgroundImage from "../../../src/images/News-and-Media-CoverageBanner.jpg";
import Banner from "../BannerForAllPages/Banner";

const MediaBanner = () => {
  return (
    <Banner
      title="News and Media"
      description="Your eco-update hub: Stay connected with Green Economy Partnership news and media updates."
      backgroundImage={backgroundImage}
      buttonText="Contact Us"
    />
  );
};

export default MediaBanner;
