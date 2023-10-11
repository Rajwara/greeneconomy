import React from "react";
import Wet from "../../../src/images/GEPs-Anaerobic-Digestion-Consultancy.png";

const WetAnaerobicDigestionPlant = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[50px] ">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl-grid-cols-2 gap-8">
        <div className="image">
          <img src={Wet} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-4xl text-[#316D69] leading-7 tracking-normal font-montserrat font-bold mb-4">
            Wet Anaerobic Digestion Plant
          </h2>
          <div className="mb-3 text-[#3c3c3c] text-lg leading-7 font-normal font-poppins">
            <p className=" ">
              It is an important process to produce sustainable energy. Wet
              anaerobic digestion allows optimal mixing, resulting in high
              biogas production. It uses organic materials having a consistency
              of 10-20% dry matter or even less.
            </p>
          </div>
          <ul className="text-[#3c3c3c] text-lg leading-7 font-normal font-poppins list-disc">
            <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-4">
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
      </div>
    </div>
  );
};

export default WetAnaerobicDigestionPlant;
