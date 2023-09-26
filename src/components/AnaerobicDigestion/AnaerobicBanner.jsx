import React from "react";
import Banner from "../BannerForAllPages/Banner";
import banner from "../../../src/images/anaerobic-main-bnr.jpg";
const AnaerobicBanner = () => {
  return (
    <Banner
      title="Waste Management"
      description="Anaerobic digestion is gaining popularity in waste management, particularly in Dubai. GEP offers consultancy to harness its potential, cut carbon footprints, and establish cost-effective power generation systems for a greener future."
      backgroundImage={banner}
      buttonText="Contact Us"
    />
  );
};

export default AnaerobicBanner;
