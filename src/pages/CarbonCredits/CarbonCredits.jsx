import React from "react";
import BlueCarbonBanner from "../../components/BlueCarbon/BlueCarbonBanner";
import PioneeringInitiatives from "../../components/BlueCarbon/PioneeringInitiatives";
import WhatIsBlueCarbon from "../../components/BlueCarbon/whatIsBlueCarbon";
import BlueCarbonMangroves from "../../components/BlueCarbon/BlueCarbonMangroves";
import BlueCarbonSeagrasses from "../../components/BlueCarbon/BlueCarbonSeagrasses";
import BlueCarbonTidalMarshes from "../../components/BlueCarbon/BlueCarbonTidalMarshes";
import BlueCarbonGepPlay from "../../components/BlueCarbon/BlueCarbonGepPlay";

const CarbonCredits = () => {
  return (
    <div>
      <BlueCarbonBanner />
      <PioneeringInitiatives />
      <BlueCarbonGepPlay/>
      <WhatIsBlueCarbon />
      <BlueCarbonMangroves />
      <BlueCarbonSeagrasses />
      <BlueCarbonTidalMarshes />
    </div>
  );
};

export default CarbonCredits;
