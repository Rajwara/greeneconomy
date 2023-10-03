import React from "react";
import BlueCarbonBanner from "../../components/CarbonTrading/BlueCarbonBanner";
import PioneeringInitiatives from "../../components/CarbonTrading/PioneeringInitiatives";
import WhatIsBlueCarbon from "../../components/CarbonTrading/whatIsBlueCarbon";
import BlueCarbonMangroves from "../../components/CarbonTrading/BlueCarbonMangroves";
import BlueCarbonSeagrasses from "../../components/CarbonTrading/BlueCarbonSeagrasses";
import BlueCarbonTidalMarshes from "../../components/CarbonTrading/BlueCarbonTidalMarshes";
import BlueCarbonGepPlay from "../../components/CarbonTrading/BlueCarbonGepPlay";
import KeyPoint from "../../components/CarbonTrading/KeyPoint";
import DrivingForcesBehind from "../../components/CarbonTrading/DrivingForcesBehind";
import WhyCarbonCredits from "../../components/CarbonTrading/WhyCarbonCredits";
import ClimateFriendlyInvestment from "../../components/CarbonTrading/ClimateFriendlyInvestment";
import CarbonTradingMission from "../../components/CarbonTrading/CarbonTradingMission";

const CarbonTrading = () => {
  return (
    <div>
      <BlueCarbonBanner />
      <PioneeringInitiatives />
      <BlueCarbonGepPlay />
      <KeyPoint />
      <DrivingForcesBehind />
      <WhyCarbonCredits />
      <ClimateFriendlyInvestment />
      <CarbonTradingMission />
      {/* <WhatIsBlueCarbon /> */}
      {/* <BlueCarbonMangroves /> */}
      {/* <BlueCarbonSeagrasses /> */}
      {/* <BlueCarbonTidalMarshes /> */}
    </div>
  );
};

export default CarbonTrading;
