import React from "react";
import BlueCarbonBanner from "../../components/BlueCarbon/BlueCarbonBanner";
import NatureBasedAssetsBlueC from "../../components/BlueCarbon/NatureBasedAssetsBlueC";
import WhatIsBlueCarbon from "../../components/BlueCarbon/whatIsBlueCarbon";
import BlueCarbonMangroves from "../../components/BlueCarbon/BlueCarbonMangroves";
import BlueCarbonSeagrasses from "../../components/BlueCarbon/BlueCarbonSeagrasses";
import BlueCarbonTidalMarshes from "../../components/BlueCarbon/BlueCarbonTidalMarshes";

const BlueCarbon = () => {
  return (
    <div>
      <BlueCarbonBanner />
      <NatureBasedAssetsBlueC />
      <WhatIsBlueCarbon />
      <BlueCarbonMangroves />
      <BlueCarbonSeagrasses />
      <BlueCarbonTidalMarshes />
    </div>
  );
};

export default BlueCarbon;
