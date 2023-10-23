import React from "react";
import Mangroves1 from "../../../src/images/agro-rewards.png";

const AgroforestryFarReaching = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col justify-center ">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-2 md:mb-4 lg:mb-6 md:text-3xl lg:text-4xl leading-7 lg:leading-10 font-montserrat font-bold">
          Agroforestry’s Far-Reaching
          <span className="text-[#bab220]"> Rewards </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal  ">
          When farmers adopt agroforestry practices on their land, the rewards
          have a far-reaching impact. Enhanced crop protection fosters income
          growth and yield diversity over time, akin to a mango tree maturing
          before bearing fruit, while trees offer added advantages through soil
          retention, and fortifying communities against natural disasters.
        </p>
      </div>
    </div>
  );
};

export default AgroforestryFarReaching;
