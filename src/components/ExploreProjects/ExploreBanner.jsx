import React from "react";
import banner from "../../../src/images/f2.jpg";
import Banner from "../BannerForAllPages/Banner";

const ExploreBanner = () => {
  return (
    <Banner
      title="Explore Project"
      description="This is Explore Project Page."
      backgroundImage={banner}
      buttonText="Contact Us"
    />
  );
};

export default ExploreBanner;
