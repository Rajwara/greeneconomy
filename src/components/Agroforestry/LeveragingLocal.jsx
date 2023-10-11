import React from "react";
import Mangroves1 from "../../../src/images/agriculture-trac.jpg";

const SupportingSmallholders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-[450px]" />
      </div>
      <div className="flex flex-col  ">
        {" "}
        <h2 className="text-[#BAB220] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Leveraging Local <span className="text-[#316D69]"> Expertise </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal mt-4 ">
          The success of agroforestry practices is profoundly influenced by
          geographical context. For that reason, we collaborate closely with
          local experts to ensure that our agroforestry initiatives thrive.
        </p>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal ">
          This partnership not only represents our committment to a shared
          environment, but also as a tangible investment in the well-being of
          farming communities.
        </p>
      </div>
    </div>
  );
};

export default SupportingSmallholders;
