import React from "react";
import SolarBanner from "../../components/RenewableEnergy/SolarBanner";
import WindandSolar from "../../components/RenewableEnergy/WindandSolar";
import Renewable from "../../components/RenewableEnergy/RenewableEnergy";
import SolarCards1 from "../../components/RenewableEnergy/SolarCards";
import CommittedBetter from "../../components/RenewableEnergy/CommittedBetter";
import SolarCards2 from "../../components/RenewableEnergy/SolarCards2";
import Brighter from "../../components/RenewableEnergy/LetsCreateBrighter";

const RenewableEnergy = () => {
  return (
    <div>
      <SolarBanner />
      <WindandSolar />
      <Renewable />
      <SolarCards1 />
      <CommittedBetter />
      <SolarCards2 />
      <Brighter />
    </div>
  );
};

export default RenewableEnergy;
