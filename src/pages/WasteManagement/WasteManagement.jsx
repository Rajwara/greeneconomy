import React from "react";
import AnaerobicBanner from "../../components/WasteManagement/AnaerobicBanner";
import BenefitsofAnaerobic from "../../components/WasteManagement/BenefitsofAnaerobic";
import DigestionConsultancy from "../../components/WasteManagement/AnaerobicDigestionConsultancy";
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
    </div>
  );
};

export default WasteManagement;
