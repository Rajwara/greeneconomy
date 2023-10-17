import React from "react";
import Banner from "../BannerForAllPages/Banner";
import banner from "../../../src/images/anaerobicdigestion-banner.png";

const AnaerobicBanner = () => {
  return (
    <Banner
      title="Anaerobic Digestion"
      description="Anaerobic digestion is gaining popularity in waste management, particularly in Dubai. GEP offers consultancy to harness its potential, cut carbon footprints, and establish cost-effective power generation systems for a greener future.
      ."
      backgroundImage={banner}
      buttonText="Go Green Now"
    />
  );
};

export default AnaerobicBanner;
