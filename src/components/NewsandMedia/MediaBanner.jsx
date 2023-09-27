import React from "react";
import backgroundImage from "../../../src/images/mediabanner.jpg";
import Banner from "../BannerForAllPages/Banner";

const MediaBanner = () => {
  return (

  <Banner
  title="News and Media"
  description="This is Blog Page Banner."
  backgroundImage={backgroundImage}
  buttonText="Contact Us"
  />
  );
};

export default MediaBanner;
