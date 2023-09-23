import React from "react";
import backgroundImage from "../../../src/images/bccbanner.jpg";

const CarbonCerditBanner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-80  px-[30px] md:px-[60px] text-start flex  font-roboto lg:px-[80px] xl:px-[100px] "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-white text-5xl font-bold flex items-center">
        Start offsetting your carbon
        <br />
        emissions today!
      </h1>
    </div>
  );
};

export default CarbonCerditBanner;
