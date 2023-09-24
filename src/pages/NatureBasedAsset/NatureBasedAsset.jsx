import React from "react";
import ForestryBanner from "../../components/NatureBasedAsset/ForestryBanner";
import NatureBasedAssets from "../../components/NatureBasedAsset/NatureBasedAssets";
import WhatIsForestry from "../../components/NatureBasedAsset/WhatIsForestry";
import GreenEconomyCanHelp from "../../components/NatureBasedAsset/GreenEconomyCanHelp";
import AgroForestry from "../../components/NatureBasedAsset/AgroForestry";

const NatureBasedAsset = () => {
  return (
    <div>
      <ForestryBanner />
      <NatureBasedAssets />
      <WhatIsForestry />
      <GreenEconomyCanHelp />
      <AgroForestry />
    </div>
  );
};

export default NatureBasedAsset;
