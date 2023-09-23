import React from "react";
import Sustainable from "../../../src/images/bccfarming.jpg";

const SustainableFarming = () => {
  return (
    <div className="flex flex-col justify-center text-center py-16 px-[30px] md:px-[60px] font-roboto lg:px-[80px] xl:px-[100px]">
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="text-[#BAB220] text-3xl font-bold font-montserrat tracking-normal leading-9 ">
          Buy Carbon Credits and
          <br />
          <span className="text-[#316D69]">Support Sustainable Sarming</span>
        </h2>
        <img src={Sustainable} alt="" className="w-[50%] h-[50%]" />
        <p className="text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
          Offsetting your carbon emissions through GEP Carbon Program helps your
          company meet climate goals and
          <br /> support local farmers.
        </p>
        <ul className="flex flex-col list-disc text-start">
          <li className="text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
            Support clean food production
          </li>
          <li className="text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
            Backed by science
          </li>
          <li className="text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
            High quality carbon credits
          </li>
          <li className="text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
            Local offsets through a farm in your area
          </li>
          <li className="text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
            Extended ecosystem benefits
          </li>
          <li className="text-[#3c3c3c] text-lg font-normal font-poppins leading-7">
            Double-counting avoided
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SustainableFarming;
