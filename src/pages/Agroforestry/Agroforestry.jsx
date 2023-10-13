import React from "react";
import AgroforestryBanner from "../../components/Agroforestry/AgroforestryBanner";
import EmpoweringClimateImpacted from "../../components/Agroforestry/EmpoweringClimateImpacted";
import SupportingSmallholders from "../../components/Agroforestry/SupportingSmallholders";
import HarvestingNature from "../../components/Agroforestry/HarvestingNature";
import LeveragingLocal from "../../components/Agroforestry/LeveragingLocal";
import EmpoweringMutualEnvironmental from "../../components/Agroforestry/EmpoweringMutualEnvironmental";
import AgroforestryFarReaching from "../../components/Agroforestry/AgroforestryFarReaching";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";
import FinancialCoBenefits from "../../components/Agroforestry/FinancialCoBenefits";

const Agroforestry = () => {
  return (
    <div>
      <AgroforestryBanner />
      <EmpoweringClimateImpacted />
      <SupportingSmallholders />
      <HarvestingNature />
      <LeveragingLocal />
      <EmpoweringMutualEnvironmental />
      <AgroforestryFarReaching />
      <FinancialCoBenefits/>
      <ContactFooterUperButton />

    </div>
  );
};

export default Agroforestry;
