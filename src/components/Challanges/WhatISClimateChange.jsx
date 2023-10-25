import React from "react";
import climate from "../../../src/images/climate-change.jpeg";

function WhatIsClimateChange() {
  return (
    <div className="pt-[30px]  lg:pt-[50px] pb-[30px] xl:pb-[50px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] bg-[#EFEDD1] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] items-center">
        <div className=" container text-left flex flex-col justify-center h-full">
          <h2 className=" text-[#316D69] text-2xl md:text-3xl xl:text-4xl mb-2 md:mb-4 xl:mb-6 leading-7 xl:leading-10 font-montserrat  font-bold ">
            What is Climate Change?
          </h2>
          <div className="font-poppins text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal text-[#3c3c3c]">
            <p className="">
              Climate change is the long-term alteration of typical weather
              patterns of the Earth and global climate systems. Climate change
              is considered the key global challenge over the decade.
            </p>
            <p className="mt-2 xl:mt-4 ">
              It is primarily driven by industrial processes, the burning of
              fossil fuels, and other destructive human activities. Climate
              change leads to a rapid increase in global temperature, resulting
              in social, economic, and environmental effects.
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-6  lg:mt-0">
          <img
            className="w-full h-full lg:h-[300px] xl:h-full rounded-lg"
            src={climate}
            alt="climate"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default WhatIsClimateChange;
