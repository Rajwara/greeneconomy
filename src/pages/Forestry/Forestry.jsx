import React from "react";
import ForestryBanner from "../../components/Forestry/ForestryBanner";
import WhatisForestry from "../../components/Forestry/WhatisForestry";
import GreenEconomyCanHelp from "../../components/Forestry/GreenEconomyCanHelp";
import AgroforestryOne from "../../components/Forestry/AgroforestryOne";
import ForestAssets from "../../components/Forestry/ForestAssets";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const Forestry = () => {
  return (
    <>
      <ForestryBanner />
      <WhatisForestry />
      <GreenEconomyCanHelp />
      <AgroforestryOne />
      <ForestAssets />
      <ContactFooterUperButton />
    </>
  );
};

export default Forestry;
