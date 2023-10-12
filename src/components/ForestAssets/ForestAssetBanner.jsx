import React from "react";
import background from "../../../src/images/agriculture-main-banner.jpg";
import Banner from "../BannerForAllPages/Banner";

const ForestAssetBanner = () => {
  return (
    <Banner
      backgroundImage={background}
      title="Forest Assets"
      description="Unlocking the hidden wealth of earth’s 30% land coverage; Forest assets and carbon offsets- A dream or reality?  "
      buttonText="Contact Us"
    />
  );
};

export default ForestAssetBanner;
