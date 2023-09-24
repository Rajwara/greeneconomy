import React from "react";
import banner from "../../../src/images/f2.jpg";
import Banner from "../BannerForAllPages/Banner";

const ExploreBanner = () => {
  return (
  <>
  <Banner
  title="Forest Carbon Offsets: Too Good to be True?"
  description="This is Explore Projects."
  backgroundImage={banner}
  buttonText="Contact Us"
  />
  </>
  );
};

export default ExploreBanner;
