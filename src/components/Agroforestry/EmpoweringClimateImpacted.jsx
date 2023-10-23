import React from "react";
import Mangroves1 from "../../../src/images/agro-empowering.png";

const EmpoweringClimateImpacted = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="flex flex-col  justify-center">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-2 md:mb-4 lg:mb-6 md:text-3xl lg:text-4xl leading-7 lg:leading-10  font-montserrat font-bold">
          Empowering Climate-Impacted{" "}
          <span className="text-[#bab220]"> Farmers Globally </span>
        </h2>
        <div className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal ">
          <p className="">
            Being a vital member of a financial consortium, we have deep-seated
            connections in the agricultural industry.
          </p>
          <p className="mt-2 lg:mt-4 ">
            To support the farmers who are most impacted by climate change, we
            have partnered with NGOs, project coordinators, cooperatives, and
            companies working directly with smallholder farmers.
          </p>
        </div>
      </div>
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default EmpoweringClimateImpacted;
