import React from "react";
import Wet from "../../../src/images/dry-anaerobic-plant.png";

function DryAnaerobicDigestion1() {
  return (
    <>
      <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[50px] flex flex-col">
        <div className="">
          <h2 className="text-4xl text-[#316D69] leading-7 tracking-normal font-montserrat font-bold mb-8">
            Dry Anaerobic Digestion Plant
          </h2>
          <div className="mb-3 text-[#3c3c3c] text-lg leading-7 font-normal font-poppins">
            <p className=" ">
              It is another environmental-friendly way to generate biogas.
              Organic material is digested anaerobically in the absence of
              water, reducing methane emissions that are otherwise released into
              the atmosphere. The process uses organic material with a
              consistency of 20-40% dry matter or more.
            </p>
          </div>
        </div>
        <div className="image py-8">
          <img src={Wet} alt="" className="w-full h-full" />
        </div>
        <div className="flex gap-8 justify-between">
          <div className="flex flex-col">
            <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-4">
              Dry Anaerobic Digestion Plant Components
            </h6>
            <ul className="text-[#3c3c3c] text-lg leading-7 font-normal font-poppins list-disc">
              <li className="ml-8 mb-2">
                Pre-treatment machinery to grind up the material{" "}
              </li>
              <li className="ml-8 mb-2">
                A fermentation tank for the non-putrescible solids
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-4">
              Advantages of Dry Anaerobic Digestion Plant
            </h6>
            <ul className="text-[#3c3c3c] text-lg leading-7 font-normal font-poppins list-disc">
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