import React from "react";
import AnaerobicDigestionGlance from "../../components/AnaerobicDigestion/AnaerobicDigestionGlance";
import AnaerobicBanner from "../../components/AnaerobicDigestion/AnaerobicBanner";
import BenefitsofAnaerobicDigestion from "../../components/AnaerobicDigestion/BenefitsofAnaerobicDigestion";
import AnaerobicDigestionofBenefits from "../../components/AnaerobicDigestion/AnaerobicDigestionofBenefits";
import WetAnaerobicDigestionPlant from "../../components/AnaerobicDigestion/WetAnaerobicDigestionPlant ";

const AnaerobicDigestion = () => {
  return (
    <div>
      <AnaerobicBanner />
      <AnaerobicDigestionGlance />
      <AnaerobicDigestionofBenefits />
      <WetAnaerobicDigestionPlant />
    </div>
  );
};

export default AnaerobicDigestion;
