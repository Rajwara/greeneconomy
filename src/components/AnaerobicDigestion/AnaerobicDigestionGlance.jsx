import React from "react";
import img2 from "../../../src/images/anaerobic-glance.png";

const AnaerobicDigestionGlance = () => {
  return (
    <div className=" flex flex-row lg:items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] md:mt-[50px] lg:mt-[50px] mt-[30px] mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        <div className="flex items-center  ">
          <img src={img2} className="h-full w-full" alt="" />
        </div>
        <div className="text-sm md:text-base lg:text-lg font-normal mt-4 font-poppins leading-5 lg:leading-7 text-[#3c3c3c]">
          <h2 className=" text-2xl md:text-3xl lg:text-4xl  text-[#316D69] leading-7 lg:leading-10 font-montserrat font-bold  mb-2 md:mb-4 lg:mb-6 ">
            Anaerobic Digestion at a Glance
          </h2>
          <div className=" text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-normal font-poppins">
            <p className=" ">
              It is a sustainable process that converts organic matter into
              energy-efficient gas and digestate in the absence of oxygen. As
              part of the integrated waste management system, anaerobic
              digestion reduces the emission of landfill gas into the
              atmosphere.
            </p>
            <p className=" mt-2 lg:mt-4">
              The process is an efficient way for companies and individuals to
              reduce their environmental footprint. In fact, for every ton of
              organic waste that is processed through anaerobic digestion,
              approximately
              <a
                href="https://www.epa.gov/sites/default/files/2016-03/documents/warm_v14_organic_materials.pdf"
                className="text-[#D3CA28] font-bold underline"
              >
                {" "}
                0.5-0.7 tons of CO2 emissions
              </a>{" "}
              are avoided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnaerobicDigestionGlance;
