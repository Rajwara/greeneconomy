import React from "react";
import background from "../../../src/images/agriculture-main-banner.jpg";
import Banner from "../BannerForAllPages/Banner";

const ForestryBanner = () => {
  return (
    <>
      <Banner
        backgroundImage={background}
        title="Forestry"
        description=" Forestry conserves nature’s treasures, balancing biodiversity, carbon storage, and versatile resource management. "
        buttonText="Register Your Interest"
      />
    </>
  );
};

export default ForestryBanner;