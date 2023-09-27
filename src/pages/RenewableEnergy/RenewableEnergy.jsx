import React from "react";
import SolarBanner from "../../components/RenewableEnergy/SolarBanner";
import InitiativesWindandSolar from "../../components/RenewableEnergy/InitiativesWindandSolar";
import Renewable from "../../components/RenewableEnergy/RenewableEnergy";
import SolarCards1 from "../../components/RenewableEnergy/SolarCards";
import CommittedBetter from "../../components/RenewableEnergy/CommittedBetter";
import SolarCards2 from "../../components/RenewableEnergy/SolarCards2";
import Brighter from "../../components/RenewableEnergy/LetsCreateBrighter";
import RenewableEnergyLi from "../../components/RenewableEnergy/RenewableEnergyLi";
import RethinkingFossilFuels from "../../components/RenewableEnergy/RethinkingFossilFuels";
import StatsPowerrenewable from "../../components/RenewableEnergy/StatsPowerrenewable";

const RenewableEnergy = () => {
  return (
    <div>
      <SolarBanner />
      <RenewableEnergyLi/>
      <InitiativesWindandSolar />
      <RethinkingFossilFuels/>
      <StatsPowerrenewable/>
      {/* <Renewable /> */}
      {/* <SolarCards1 /> */}
      {/* <CommittedBetter /> */}
      {/* <SolarCards2 /> */}
      {/* <Brighter /> */}
    </div>
  );
};

export default RenewableEnergy;
