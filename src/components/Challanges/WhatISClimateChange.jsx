import React from "react";
import climate from "../../../src/images/climate-change.jpeg";

function WhatIsClimateChange() {
  return (
    <div className="py-[50px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] bg-[#EFEDD1] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
        <div className=" container text-left flex flex-col justify-center h-full">
          <h2 className=" text-[#316D69] text-4xl mb-6 font-montserrat  font-bold pb-6">
            What is Climate Change?
          </h2>
         <div className="font-poppins text-lg text-[#3c3c3c]">
         <p className="">
            Climate change refers to the long-term changes in temperature,
            precipitation, wind patterns, and other measures of climate that
            occur over several decades or longer.
          </p>
          <p className=" ">
            Human activities, such as the burning of fossil fuels and
            deforestation, are the primary drivers of climate change. As a
            result of climate change, the Earth's average surface temperature is
            rising, leading to a wide range of impacts, including more extreme
            weather events, sea level rise, and changes in the frequency and
            severity of heat waves, droughts, and storms.
          </p>
         </div>
        </div>
        <div className="pt-[20px] flex flex-col justify-center items-center h-full">
          <div className=" container flex  items-center">
            <img className=" rounded-lg" src={climate} alt="climate"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIsClimateChange;
