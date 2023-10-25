import React from "react";
import img1 from "../../../src/images/what-is-agriculture.png";

function AgricultureOne() {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px]  lg:mt-[50px] mb-[30px] xl:mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-[50px] ">
        <div className=" text-white  flex flex-col justify-center  ">
          <h2 className="  mb-2 md:mb-4 xl:mb-6  text-[#316D69] leading-7 xl:leading-10 font-bold text-2xl md:text-3xl xl:text-4xl font-montserrat">
            What is <span className="text-[#bab220]">Agriculture</span>
          </h2>
          <p className="text-sm md:text-base xl:text-lg text-[#3c3c3c] font-normal font-poppins leading-5 xl:leading-7 mb-4 md:mb-4 xl:mb-6">
            Agriculture contributes to carbon sequestration, the process of
            extracting carbon dioxide from the atmosphere and storing it in the
            soil and vegetation. This can be achieved through various methods,
            including:
          </p>
          <ul className=" list-inside gap-4 font-poppins  text-[#3c3c3c] font-normal text-sm md:text-base xl:text-lg leading-5 xl:leading-7 mb-2 md:mb-4 xl:mb-4 ml-4">
            <li className=" ">
              <span className="text-[#316D69] font-bold ">
                {" "}
                1. Conservation Tillage:
              </span>{" "}
              <br />
              Minimizing soil disturbance to enhance organic matter in the soil
              and encourage carbon sequestration.
            </li>
            <li className="mt-2">
              <span className="text-[#316D69] font-bold">
                2. Cover Cropping:
              </span>{" "}
              <br /> Planting crops such as legumes that safeguard the soil and
              support carbon sequestration.
            </li>
            <li className="mt-2 ">
              <span className="text-[#316D69] font-bold">
                3. Crop Rotation:
              </span>{" "}
              <br /> Alternating between different crop types to boost carbon
              storage in the soil.
            </li>
            <li className="mt-2">
              <span className="text-[#316D69] font-bold">
                4. Land Rrestoration:
              </span>
              <br /> Rejuvenating degraded land through reforestation, wetland
              restoration, and transforming croplands into grasslands, all of
              which can increase carbon sequestration.
            </li>
          </ul>

          <p className="text-sm md:text-base xl:text-lg leading-5 xl:leading-7 text-[#3c3c3c] font-normal font-poppins  ">
            These practices not only aid in mitigating climate change by
            removing carbon from the atmosphere but also enhance soil health and
            fertility, elevate crop yields, and offer additional environmental
            benefits.
          </p>
        </div>
        <div className="mt-6 md:mt-6 lg:mt-0">
          <img className="h-full w-full rounded-lg" src={img1} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default AgricultureOne;
