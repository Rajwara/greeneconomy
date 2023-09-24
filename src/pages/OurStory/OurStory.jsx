import React from "react";
import OurStoryBanner from "../../components/OurStory/OurStoryBanner";
import OurStoryCards1 from "../../components/OurStory/OurStoryCards1";
import OurStoryCards2 from "../../components/OurStory/OurStoryCards2";
import OurstoryCards3 from "../../components/OurStory/OurstoryCards3";
import { OurStoryMission } from "../../components/OurStory/OurStoryMission";
import OurStoryOrigination from "../../components/OurStory/OurStoryOrigination";
import OurStoryServices from "../../components/OurStory/OurStoryServices";
import StateAbout from "../../components/OurStory/StateofGreenEconomy";
import WhatWeDo from "../../components/OurStory/WhatWeDo";
import WindSolar from "../RenewableEnergy/Renewable Energy";

const OurStory = () => {
  return (
    <div>
      <OurStoryBanner />
      <StateAbout />
      <OurStoryCards1 />
      <WhatWeDo />
      <OurStoryOrigination />
      <OurStoryCards2 />
      <OurStoryServices />
      <OurstoryCards3 />
      <OurStoryMission />
    </div>
  );
};

export default OurStory;
