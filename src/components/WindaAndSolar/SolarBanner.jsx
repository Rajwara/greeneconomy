import React from "react";
import banner1 from "../../../src/images/wind-mill-banner.jpg";
function SolarBanner() {
  return (
    <div>
      <img
        src={banner1}
        alt="banner"
        className="h-[130px] w-full lg:h-[300px]"
      ></img>
    </div>
  );
}

export default SolarBanner;
