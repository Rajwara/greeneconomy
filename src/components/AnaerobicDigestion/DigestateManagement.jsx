import React from "react";
import Digestate from "../../../src/images/anaerobic-digestion-management.png";

const DigestateManagement = () => {
  return (
    <div className="  flex justify-center gap-8 flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] p-5 md:p-20">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ">
        <div>
          <h1 className="text-[#BAB220] text-2xl mb-8 md:text-3xl lg:text-3xl leading-10 font-montserrat font-bold">
            Digestate
            <span className="text-[#316D69]"> Management </span>
          </h1>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
            It is an effective way to reduce the environmental impacts of
            wastewater treatment. In the process, the biogas is removed and
            reused by converting it into energy sources such as liquid fuel,
            heat, and electricity
          </p>
          <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold leading-9	font-montserrat mb-4 mt-4">
            Primary Goal:
          </h6>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 font-poppins font-normal">
            The main aim of waste management is to reduce the environmental
            impact of waste, conserve resources, and promote sustainable
            practices.
          </p>
        </div>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 tracking-normal font-poppins mt-4 font-normal">
          The sustainable approach reduces greenhouse gas emissions and improves
          soil health by nurturing its nutrients in the most economical way.
          Anaerobic digestion and digestate management are being employed to
          conserve energy, improve air quality, and reduce waste.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <img src={Digestate} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default DigestateManagement;
