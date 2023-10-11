import React from "react";
import background from "../../../src/images/agriculture-main-banner.jpg";
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
