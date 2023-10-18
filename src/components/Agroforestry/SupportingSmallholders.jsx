import React from "react";
import Mangroves1 from "../../../src/images/agro-supporting.png";

const SupportingSmallholders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[100px] mb-[50px]">
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col justify-center">
        {" "}
        <h2 className="text-[#BAB220] text-2xl mb-4 md:mb-6 lg:mb-8 md:text-3xl lg:text-4xl leading-7 lg:leading-10  font-montserrat font-bold">
          <span className="text-[#316D69]">Supporting Smallholders with</span>{" "}
          Agroforestry in the Carbon Market
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal  ">
          By measuring and certifying the sequestered carbon in a low-cost
          manner, GEP enables smallholders to access the voluntary market and
          empowers them to establish an extra source of income by receiving
          compensation for sequestering additional carbon on their land. Through
          financial incentives, we encourage them to engage in agroforestry
          where the trees they plant on their land capture excess carbon.
        </p>
      </div>
    </div>
  );
};

export default SupportingSmallholders;
