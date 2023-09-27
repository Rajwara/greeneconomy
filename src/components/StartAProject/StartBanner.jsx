import React from "react";
import img1 from "../../../src/images/start-project-2.jpg";
import Banner from "../BannerForAllPages/Banner";


function StartBanner() {

  return (
  <>
  <Banner
  title="Empower farmers now"
  description="This is Start Project page Banner."
  backgroundImage={img1}
  buttonText="Contact Us"
  />
  </>
  );
};

export default StartBanner;
