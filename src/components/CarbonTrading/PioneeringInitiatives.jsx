import React from "react";
import Nature from "../../../src/images/Pioneering-Initiatives-in-Carbon-Trading.png";

const PioneeringInitiatives = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] items-center mt-[30px]  lg:mt-[50px] mb-[30px] xl:mb-[50px] px-[30px] md:px-[60px] font-roboto lg:px-[80px] xl:px-[100px]">
      <div className="container text-left text-white flex flex-col justify-center  h-full">
        <h2 className="  mb-2 md:mb-4 xl:mb-6   font-montserrat text-[#316D69] text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10 font-bold ">
          Pioneering Initiatives in
          <span className="text-[#BAB220]"> Carbon Trading</span>
        </h2>
        <div className="text-[#3C3C3C] font-poppins text-sm md:text-base xl:text-lg font-normal leading-5 xl:leading-7">
          <p className="">
            Green Economy Partnership specializes in the dynamics of carbon
            trading. Carbon trading is a process that transforms carbon dioxide
            gas (CO2) into an economic commodity. How does the mechanism work?
            The state caps the amount of greenhouse gasses, particularly CO2,
            that could be emitted by each industrial sector which is where CO2
            sensor technology monitors emissions. Each year, industries are
            given individual quotas of CO2 emissions, and our carbon credit
            trading platforms help them throughout the process.
          </p>
          <p className="  mt-2 xl:mt-4">
            It is through carbon trading that the government wants the
            businesses to opt for less polluting technologies, and persuades
            them in doing so. GEP experts help you reduce carbon emissions,
            calculate your carbon footprint, resulting in the reduction of
            global greenhouse gas emissions.
          </p>
        </div>
      </div>
      <div className="  mt-6 md:mt-6 lg:mt-0">
        <img
          className="h-full lg:h-[450px] xl:h-[500px] w-full rounded-lg"
          src={Nature}
          alt="deforestation"
        ></img>
      </div>
    </div>
  );
};

export default PioneeringInitiatives;
