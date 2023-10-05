import React from "react";
import CarbonCreditsBanner from "../../components/CarbonCredits/CarbonCreditsBanner";
import GEPCarbonProgram from "../../components/CarbonCredits/GEPCarbonProgram";
import CriteriaforSelecting from "../../components/CarbonCredits/CriteriaforSelecting";
import WhyPartnerWithGep from "../../components/CarbonCredits/WhyPartnerWithGep";
import CarbonCreditsMission from "../../components/CarbonCredits/CarbonCreditsMission";

const CarbonCredits = () => {
  return (
    <div>
      <CarbonCreditsBanner />
      <GEPCarbonProgram/>
      <CriteriaforSelecting/>
      <WhyPartnerWithGep />
      <CarbonCreditsMission/>
    </div>
  );
};

export default CarbonCredits;
