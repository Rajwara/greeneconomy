import React from "react";
import backgroundImage from "../../../src/images/bccbanner.jpg";
import Banner from "../BannerForAllPages/Banner";

const CarbonCerditBanner = () => {
  return (
    <Banner
      title="Buy Carbon Cerdits"
      description=" This is buy carbon cerdits page."
      backgroundImage={backgroundImage}
      buttonText="Contact Us"
    />
  );
};

export default CarbonCerditBanner;
