import React from "react";
import Banner from "../BannerForAllPages/Banner";
import banner2 from "../../../src/images/About-Us-Banner.jpg";

const OurStoryBanner = () => {
  return (
    <div>
      <Banner
        title="Our Story"
        description="Welcome to Green Economy Partnership, your gateway to sustainable climate solutions, dedicated to addressing the climate crisis, and achieving net-zero carbon emissions by 2050 through innovative solutions and strategic partnership."
        backgroundImage={banner2}
        buttonText="Contact Us"
      />
    </div>
  );
};

export default OurStoryBanner;
