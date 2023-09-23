import React from "react";
import ForestryBanner from "../../components/Forestry/ForestryBanner";
import NatureBasedAssets from "../../components/Forestry/NatureBasedAssets";
import WhatIsForestry from "../../components/Forestry/WhatIsForestry";
import GreenEconomyCanHelp from "../../components/Forestry/GreenEconomyCanHelp";
import AgroForestry from "../../components/Forestry/AgroForestry";

const Forestry = () => {
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

export default Forestry;
