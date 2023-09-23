import React from "react";
import AboutBanner from "../../components/AboutUs/AboutBanner";
import AboutCards1 from "../../components/AboutUs/AboutCards1";
import AboutCards2 from "../../components/AboutUs/AboutCards2";
import AboutCards3 from "../../components/AboutUs/AboutCards3";
import { AboutMission } from "../../components/AboutUs/AboutMission";
import Origination from "../../components/AboutUs/AboutOrigination";
import AboutServices from "../../components/AboutUs/AboutServices";
import StateAbout from "../../components/AboutUs/StateofGreenEconomy";
import WhatWeDo from "../../components/AboutUs/WhatWeDo";
import WindSolar from "../../pages/WindandSolar/WindSolar";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner />
      <StateAbout />
      <AboutCards1 />
      <WhatWeDo />
      <Origination />
      <AboutCards2 />
      <AboutServices />
      <AboutCards3 />
      <AboutMission />
    </div>
  );
};

export default AboutUs;
