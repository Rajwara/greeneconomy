import React from "react";
import SolarBanner from "../../components/WindaAndSolar/SolarBanner";
import WindandSolar from "../../components/WindaAndSolar/WindandSolar";
import Renewable from "../../components/WindaAndSolar/RenewableEnergy";
import SolarCards1 from "../../components/WindaAndSolar/SolarCards";
import CommittedBetter from "../../components/WindaAndSolar/CommittedBetter";
import SolarCards2 from "../../components/WindaAndSolar/SolarCards2";
import Brighter from "../../components/WindaAndSolar/LetsCreateBrighter";

const WindSolar = () => {
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

export default WindSolar;
