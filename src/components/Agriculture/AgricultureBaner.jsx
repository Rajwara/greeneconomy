import React from "react";
import background from "../../../src/images/agriculture-banner.png";
import Banner from "../BannerForAllPages/Banner";

const AgricultureBanner = () => {
  return (
    <>
      <Banner
        backgroundImage={background}
        title="Agriculture"
        description="The role of agriculture in carbon sequestration helps in climate change mitigation by enhancing soil health and fertility, increasing crop yields, and offering other environmental benefits."
        buttonText="Get Started"
      />
    </>
  );
};

export default AgricultureBanner;
