import React from "react";
import banner from "../../../src/images/Contact-us.png";
import Banner from "../BannerForAllPages/Banner";

const MainBanner = () => {
  return (
    <>
      <Banner
        title="Contact us Today."
        description="We are here to answer your questions and hear your thoughts. "
        backgroundImage={banner}
        buttonText="Learn More"
      />
    </>
  );
};

export default MainBanner;
