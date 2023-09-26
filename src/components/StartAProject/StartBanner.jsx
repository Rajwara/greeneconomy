import React from "react";
import img1 from "../../../src/images/start-project-2.jpg";
import Banner from "../BannerForAllPages/Banner";

const StartBanner = () => {
  return (
    <Banner
      title="Start A Project"
      description="This is start a project page."
      backgroundImage={img1}
      buttonText="Contact Us"
    />
  );
};

export default StartBanner;
