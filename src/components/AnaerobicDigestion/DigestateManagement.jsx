import React from "react";
import Digestate from "../../../src/images/anaerobic-digestion-management.png";

const DigestateManagement = () => {
  return (
    <div className="  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 flex-col md:flex-row px-[30px] items-center md:px-[60px] lg:px-[80px] xl:px-[100px] pt-[30px]  lg:pt-[50px] pb-[30px] xl:pb-[50px]">
      <div className="w-full ">
        <div>
          <h1 className="text-[#BAB220] text-2xl  mb-2 md:mb-4 xl:mb-6  md:text-3xl xl:text-4xl leading-7 xl:leading-10 font-montserrat font-bold">
            Digestate
            <span className="text-[#316D69]"> Management </span>
          </h1>
          <p className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7  font-poppins font-normal">
            It is an effective way to reduce the environmental impacts of
            wastewater treatment. In the process, the biogas is removed and
            reused by converting it into energy sources such as liquid fuel,
            heat, and electricity
          </p>
          <h6 className="uppercase text-sm md:text-base xl:text-lg text-[#316D69] font-bold leading-7 xl:leading-9	font-montserrat mb-2 md:mb-2 xl:mb-4 mt-4">
            Primary Goal:
          </h6>
          <p className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-poppins font-normal">
            The main aim of waste management is to reduce the environmental
            impact of waste, conserve resources, and promote sustainable
            practices.
          </p>
        </div>
        <p className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 tracking-normal font-poppins mt-2 xl:mt-4 font-normal">
          The sustainable approach reduces greenhouse gas emissions and improves
          soil health by nurturing its nutrients in the most economical way.
          Anaerobic digestion and digestate management are being employed to
          conserve energy, improve air quality, and reduce waste.
        </p>
      </div>
      <div className="">
        <img
          src={Digestate}
          alt=""
          className="w-full h-full lg:h-[400px] xl:h-full  rounded-lg"
        />
      </div>
    </div>
  );
};

export default DigestateManagement;
