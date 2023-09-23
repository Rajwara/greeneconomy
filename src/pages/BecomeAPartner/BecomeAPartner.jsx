import React from "react";
import CarbonPartnershipProgram from "../../components/BecomeAPartner/CarbonPartnershipProgram";
import ItsBestForCompanies from "../../components/BecomeAPartner/ItsBestForCompanies";
import GepCarbon from "../../components/BecomeAPartner/GepCarbon";
import BenefitsForPartner from "../../components/BecomeAPartner/BenifitsForPartner";
import FarmersBenefits from "../../components/BecomeAPartner/BenefitsForFarmers";
import PartnerMission from "../../components/BecomeAPartner/PartnerMission";

const BecomeAPartner = () => {
  return (
    <div>
      <CarbonPartnershipProgram />
      <ItsBestForCompanies />
      <GepCarbon />
      <BenefitsForPartner />
      <FarmersBenefits />
      <PartnerMission />
    </div>
  );
};

export default BecomeAPartner;
