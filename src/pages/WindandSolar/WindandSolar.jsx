import React from "react";
import SolarBanner from "../../components/WindandSolar/SolarBanner";
import InitiativesWindandSolar from "../../components/WindandSolar/InitiativesWindandSolar";
import RenewableEnergyLi from "../../components/WindandSolar/RenewableEnergyLi";
import RethinkingFossilFuels from "../../components/WindandSolar/RethinkingFossilFuels";
import StatsPowerrenewable from "../../components/WindandSolar/StatsPowerrenewable";
import ContactFooterUperButton from "../../components/ContactFooterUperComponent/ContactFooterUperButton";
import WindandSolar1 from "../../components/WindandSolar/WindandSolar1";
import InnerCard from "../../components/WindandSolar/InnerCard";
import OurCommitment from "../../components/WindandSolar/OurCommitment";

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
