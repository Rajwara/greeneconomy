import React from "react";
import AnaerobicBanner from "../../components/AnaerobicDigestion/AnaerobicBanner";
import BenefitsofAnaerobic from "../../components/AnaerobicDigestion/BenefitsofAnaerobic";
import AnaerobicDigestion from "../../components/AnaerobicDigestion/AnaerobicDigestionPlant";
import DryAnaerobicDisgestion from "../../components/AnaerobicDigestion/DryAnaerobicDistesion";
import AnaerobicDigestionForIndustry from "../../components/AnaerobicDigestion/AnaerobicDigestionForIndustry";
import DigestionManagement from "../../components/AnaerobicDigestion/DigestionManagement";
import DigestionConsultancy from "../../components/AnaerobicDigestion/AnaerobicDigestionConsultancy";
import AnaerobicDigestionCards from "../../components/AnaerobicDigestion/AnaerobicDigestionCards";
import AnaerobicJoin from "../../components/AnaerobicDigestion/AnaerobicJoin";

const Anaerobic = () => {
  return (
    <div>
      <AnaerobicBanner />
      <BenefitsofAnaerobic />
      <AnaerobicDigestion />
      <DryAnaerobicDisgestion />
      <AnaerobicDigestionForIndustry />
      <DigestionManagement />
      <DigestionConsultancy />
      <AnaerobicDigestionCards />
      <AnaerobicJoin />
    </div>
  );
};

export default Anaerobic;
