import React from "react";
import AnaerobicDigestionGlance from "../../components/AnaerobicDigestion/AnaerobicDigestionGlance";
import AnaerobicBanner from "../../components/AnaerobicDigestion/AnaerobicBanner";
import AnaerobicDigestionofBenefits from "../../components/AnaerobicDigestion/AnaerobicDigestionofBenefits";
import WetAnaerobicDigestionPlant from "../../components/AnaerobicDigestion/WetAnaerobicDigestionPlant ";
import AnaerobicDigestionForIndustry from "../../components/AnaerobicDigestion/AnaerobicDigestionForIndustry";
import DryAnaerobicDigestion1 from "../../components/AnaerobicDigestion/DryAnaerobicDigestion1";
import DigestateManagement from "../../components/AnaerobicDigestion/DigestateManagement";
import WasteManagementSolutions from "../../components/AnaerobicDigestion/WasteManagementSolutions";
import GEPAnaerobicDigestionConsultancy from "../../components/AnaerobicDigestion/GEPAnaerobicDigestionConsultancy";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";

const AnaerobicDigestion = () => {
  return (
    <div>
      <AnaerobicBanner />
      <AnaerobicDigestionGlance />
      <AnaerobicDigestionofBenefits />
      <WetAnaerobicDigestionPlant />
      <DryAnaerobicDigestion1 />
      <AnaerobicDigestionForIndustry />
      <DigestateManagement />
      <WasteManagementSolutions />
      <GEPAnaerobicDigestionConsultancy />
      <ContactFooterUperButton />
    </div>
  );
};

export default AnaerobicDigestion;
