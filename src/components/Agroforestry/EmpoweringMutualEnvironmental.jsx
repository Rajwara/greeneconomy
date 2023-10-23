import React from "react";
import Mangroves1 from "../../../src/images/agro-empowering-amallholder.png";

const SupportingSmallholders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="flex flex-col justify-center">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-2 md:mb-4 lg:mb-6 md:text-3xl lg:text-4xl leading-7 lg:leading-10  font-montserrat font-bold">
          Empowering Smallholder Farmers for Mutual{" "}
          <span className="text-[#bab220]"> Environmental Impact </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal  ">
          We work closely with local project coordinators who provide efficient
          training, support, and monitoring to smallholder farmers. In doing so,
          we empower them to turn the tide of climate change.
        </p>
      </div>
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default SupportingSmallholders;
