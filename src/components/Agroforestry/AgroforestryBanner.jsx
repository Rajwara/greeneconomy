import React from "react";
import background from "../../../src/images/agroforestry-banner.png";
import Banner from "../BannerForAllPages/Banner";

const AgroforestryBanner = () => {
  return (
    <>
      <Banner
        backgroundImage={background}
        title="Agroforestry"
        description="Where trees and crops unite for a greener tomorrow!  "
        buttonText="Contact Us"
      />
    </>
  );
};

export default AgroforestryBanner;
