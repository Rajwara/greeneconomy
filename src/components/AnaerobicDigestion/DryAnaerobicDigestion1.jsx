import React from "react";
import Wet from "../../../src/images/anaerobic-dry1.png";

function DryAnaerobicDigestion1() {
  return (
    <>
      <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[50px] flex flex-col">
        <div className="">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#316D69] leading-7 lg:leading-10 font-montserrat font-bold  mb-2 md:mb-4 lg:mb-6 ">
            Dry Anaerobic Digestion Plant
          </h2>
          <div className="mb-3 text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-normal font-poppins">
            <p className=" ">
              It is another environmental-friendly way to generate biogas.
              Organic material is digested anaerobically in the absence of
              water, reducing methane emissions that are otherwise released into
              the atmosphere. The process uses organic material with a
              consistency of 20%-40% dry matter or more.
            </p>
          </div>
        </div>
        <div className="image py-8">
          <img src={Wet} alt="" className="w-full h-full rounded-lg" />
        </div>
        <div className="flex flex-wrap gap-8 justify-between">
          <div className="flex flex-col">
            <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold leading-7 lg:leading-9	font-montserrat mb-0 md:mb-2 lg:mb-4">
              Dry Anaerobic Digestion Plant Components
            </h6>
            <ul className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-normal font-poppins list-disc">
              <li className="ml-8 mb-2">
                Pre-treatment machinery to grind up the material{" "}
              </li>
              <li className="ml-8 mb-2">
                A fermentation tank for the non-putrescible solids
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold leading-7 lg:leading-9	font-montserrat mb-0 md:mb-2 lg:mb-4">
              Advantages of Dry Anaerobic Digestion Plant
            </h6>
            <ul className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-normal font-poppins list-disc">
              <li className="ml-8 mb-2">Requires less maintenance </li>
              <li className="ml-8 mb-2">Doesn't require much water</li>
              <li className="ml-8 mb-2">Needs low power and heat</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DryAnaerobicDigestion1;
