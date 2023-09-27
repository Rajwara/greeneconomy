import React from "react";
import ForestryBanner from "../../components/NatureBasedAsset/ForestryBanner";
import NatureBasedAssets from "../../components/NatureBasedAsset/NatureBasedAssets";
import WhatIsForestry from "../../components/NatureBasedAsset/WhatIsForestry";
import GreenEconomyCanHelp from "../../components/NatureBasedAsset/GreenEconomyCanHelp";
import AgroForestry from "../../components/NatureBasedAsset/AgroForestry";
import NatureBaseSolutionSecond from "../../components/NatureBasedAsset/NatureBaseSolutionSecond";
import GovermentBiodiversity from "../../components/NatureBasedAsset/GovermentBiodiversity";
import UnSecretaryQuote from "../../components/NatureBasedAsset/UnSecretaryQuote";
import HowStatisticsValidate from "../../components/NatureBasedAsset/HowStatisticsValidate";

const NatureBasedAsset = () => {
  return (
    <div>
      <ForestryBanner />
      <NatureBasedAssets />
      <NatureBaseSolutionSecond/>
      <GovermentBiodiversity/>
      <UnSecretaryQuote/>
      <HowStatisticsValidate/>
      {/* <WhatIsForestry /> */}
      {/* <GreenEconomyCanHelp /> */}
      {/* <AgroForestry /> */}
    </div>
  );
};

export default NatureBasedAsset;
