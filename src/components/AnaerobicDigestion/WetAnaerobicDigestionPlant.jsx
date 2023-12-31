import React from "react";
import Wet from "../../../src/images/anaerobic-wet.png";

const WetAnaerobicDigestionPlant = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px]  lg:mt-[50px] ">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl-grid-cols-2 gap-8 items-center">
        <div className="image hidden md:hidden lg:block xl:block">
          <img
            src={Wet}
            alt=""
            className="w-full h-full lg:h-[500px] xl:h-[500px]"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl xl:text-4xl text-[#316D69] leading-7 xl:leading-10 font-montserrat font-bold  mb-2 md:mb-4 xl:mb-6 ">
            Wet Anaerobic Digestion Plant
          </h2>
          <div className="mb-3 text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal font-poppins">
            <p className=" ">
              It is an important process to produce sustainable energy. Wet
              anaerobic digestion allows optimal mixing, resulting in high
              biogas production. It uses organic materials having a consistency
              of 10-20% dry matter or even less.
            </p>
          </div>
          <ul className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal font-poppins list-disc">
            <h6 className="uppercase text-sm md:text-base xl:text-lg text-[#316D69] font-bold leading-7 xl:leading-9	font-montserrat mb-2 xl:mb-4">
              Wet Anaerobic Digestion Plant Components
            </h6>
            <li className="ml-8 mb-2">An anaerobic digester </li>
            <li className="ml-8 mb-2">
              Inlet structure to manage influent flow{" "}
            </li>
            <li className="ml-8 mb-2">
              A retention tank to store the influent for digestion
            </li>
            <li className="ml-8 mb-2">
              An effluent storage structure to store treated wastewater from the
              digester outlet
            </li>
            <li className="ml-8 mb-2">
              A post-treatment system to treat organic pollutants
            </li>
            <li className="ml-8 mb-2">
              A methane collection system to capture biogas released
            </li>
            <li className="ml-8 mb-2">A monitoring system</li>
          </ul>
        </div>
        <div className="image lg:hidden xl:hidden">
          <img src={Wet} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default WetAnaerobicDigestionPlant;
