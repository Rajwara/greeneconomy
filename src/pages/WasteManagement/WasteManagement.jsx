import React from "react";
import AnaerobicBanner from "../../components/WasteManagement/AnaerobicBanner";
import BenefitsofAnaerobic from "../../components/WasteManagement/BenefitsofAnaerobic";
import AnaerobicDigestion from "../../components/WasteManagement/AnaerobicDigestionPlant";
import DryAnaerobicDisgestion from "../../components/WasteManagement/DryAnaerobicDistesion";
import AnaerobicDigestionForIndustry from "../../components/WasteManagement/AnaerobicDigestionForIndustry";
import DigestionManagement from "../../components/WasteManagement/DigestionManagement";
import DigestionConsultancy from "../../components/WasteManagement/AnaerobicDigestionConsultancy";
import AnaerobicDigestionCards from "../../components/WasteManagement/AnaerobicDigestionCards";
import AnaerobicJoin from "../../components/WasteManagement/AnaerobicJoin";
import AnaerobicDigestionGlance from "../../components/WasteManagement/AnaerobicDigestionGlance";
import StatsAnaerobic from "../../components/WasteManagement/StatsAnaerobic";
import WasteManagementMission from "../../components/WasteManagement/WasteManagementMission";

const WasteManagement = () => {
  return (
    <div>
      <AnaerobicBanner />
      <AnaerobicDigestionGlance />
      <DigestionConsultancy />
      <BenefitsofAnaerobic />
      <StatsAnaerobic />
      <WasteManagementMission />
      {/* <AnaerobicDigestion /> */}
      {/* <DryAnaerobicDisgestion /> */}
      {/* <AnaerobicDigestionForIndustry /> */}
      {/* <DigestionManagement /> */}
      {/* <AnaerobicDigestionCards /> */}
      {/* <AnaerobicJoin /> */}
    </div>
  );
};

export default WasteManagement;
