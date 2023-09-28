import React from "react";
import BlueCarbonBanner from "../../components/BlueCarbon/BlueCarbonBanner";
import PioneeringInitiatives from "../../components/BlueCarbon/PioneeringInitiatives";
import WhatIsBlueCarbon from "../../components/BlueCarbon/whatIsBlueCarbon";
import BlueCarbonMangroves from "../../components/BlueCarbon/BlueCarbonMangroves";
import BlueCarbonSeagrasses from "../../components/BlueCarbon/BlueCarbonSeagrasses";
import BlueCarbonTidalMarshes from "../../components/BlueCarbon/BlueCarbonTidalMarshes";
import BlueCarbonGepPlay from "../../components/BlueCarbon/BlueCarbonGepPlay";
import KeyPoint from "../../components/BlueCarbon/KeyPoint";
import DrivingForcesBehind from "../../components/BlueCarbon/DrivingForcesBehind";
import WhyCarbonCredits from "../../components/BlueCarbon/WhyCarbonCredits";
import ClimateFriendlyInvestment from "../../components/BlueCarbon/ClimateFriendlyInvestment";

const CarbonCredits = () => {
  return (
    <div>
      <BlueCarbonBanner />
      <PioneeringInitiatives />
      <BlueCarbonGepPlay/>
      <KeyPoint/> 
      <DrivingForcesBehind/>
      <WhyCarbonCredits/>
      <ClimateFriendlyInvestment/>
      {/* <WhatIsBlueCarbon /> */}
      {/* <BlueCarbonMangroves /> */}
      {/* <BlueCarbonSeagrasses /> */}
      {/* <BlueCarbonTidalMarshes /> */}
    </div>
  );
};

export default CarbonCredits;
