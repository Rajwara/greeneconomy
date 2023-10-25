import React from "react";
import Agro from "../../../src/images/forestasset-diverse-pathways.png";

const DiversePathways = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px]  lg:mt-[50px] mb-[30px] xl:mb-[50px]">
      <div className="img">
        <img src={Agro} alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col justify-center ">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-2 md:mb-4 xl:mb-6 md:text-3xl xl:text-4xl leading-7 xl:leading-10  font-montserrat font-bold">
          Diverse Pathways to Carbon{" "}
          <span className="text-[#bab220]">Credits </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7  font-poppins font-normal">
          Farmers have an array of options at their disposal to sequester carbon
          into the soil and earn valuable credits. By introducing practices such
          as reducing tillage, cover cropping, and crop rotation, they can
          embark on a journey toward soil resilience, ultimately leading to a
          more profitable agricultural operation.
        </p>
        <h2 className="text-[#316D69] text-2xl mb-2 md:mb-4 xl:mb-6 md:text-3xl xl:text-4xl leading-7 xl:leading-10 tracking-normal font-montserrat font-bold mt-4">
          Cutting-Edge Approaches for{" "}
          <span className="text-[#bab220]">Environmental Stewardship </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7  font-poppins font-normal">
          For businesses seeking the highest level of environmental stewardship,
          Carbon by Green Economy offers innovative protocols that are endorsed
          by esteemed organizations like Verra. These protocols incorporate
          decades of research and scientific advancements, unlocking the vast
          global potential for crop-based carbon offsets.
        </p>
      </div>
    </div>
  );
};

export default DiversePathways;
