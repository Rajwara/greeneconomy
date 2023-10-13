import React from "react";
import SolarBanner from "../../components/RenewableEnergy/SolarBanner";
import InitiativesWindandSolar from "../../components/RenewableEnergy/InitiativesWindandSolar";
import RenewableEnergyLi from "../../components/RenewableEnergy/RenewableEnergyLi";
import RethinkingFossilFuels from "../../components/RenewableEnergy/RethinkingFossilFuels";
import StatsPowerrenewable from "../../components/RenewableEnergy/StatsPowerrenewable";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";
import WindandSolar1 from "../../components/RenewableEnergy/WindandSolar1";
import InnerCard from "../../components/RenewableEnergy/InnerCard";
import OurCommitment from "../../components/RenewableEnergy/OurCommitment";

const WindandSolar = () => {
  return (
    <div>
      <SolarBanner />
      <WindandSolar1 />
      <RenewableEnergyLi />
      <InitiativesWindandSolar />
      <InnerCard />
      <OurCommitment />
      <RethinkingFossilFuels />
      <StatsPowerrenewable />
      <ContactFooterUperButton />
    </div>
  );
};

export default WindandSolar;
