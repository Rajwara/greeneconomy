import React from "react";
import Mangroves1 from "../../../src/images/agro-leveraging.png";

const SupportingSmallholders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] lg:mt-[50px] mb-[30px] xl:mb-[50px]">
      <div className="img hidden md:hidden lg:block xl:block">
        <img src={Mangroves1} alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col  justify-center">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-2 md:mb-4 xl:mb-6 md:text-3xl xl:text-4xl leading-7 xl:leading-10 font-montserrat font-bold">
          Leveraging Local <span className="text-[#bab220]"> Expertise </span>
        </h2>
        <div className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7  font-poppins font-normal  ">
          <p className="">
            The success of agroforestry practices is profoundly influenced by
            geographical context. For that reason, we collaborate closely with
            local experts to ensure that our agroforestry initiatives thrive.
          </p>
          <p className="mt-2 xl:mt-4 ">
            This partnership not only represents our commitment to a shared
            environment but also serves as a tangible investment in the
            well-being of farming communities.
          </p>
        </div>
      </div>
      <div className="img lg:hidden xl:hidden">
        <img src={Mangroves1} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default SupportingSmallholders;
