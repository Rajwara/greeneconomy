import React from "react";
import Agro from "../../../src/images/Family-farm.jpeg";

const CuttingEdgeApproaches = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="flex flex-col  ">
        {" "}
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Cutting-Edge Approaches for{" "}
          <span className="text-[#bab220]">Environmental Stewardship </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
          For businesses seeking the highest level of environmental stewardship,
          Carbon by Green Economy offers innovative protocols that are endorsed
          by esteemed organizations like Verra. These protocols incorporate
          decades of research and scientific advancements, unlocking the vast
          global potential for crop-based carbon offsets.
        </p>
      </div>
      <div className="img">
        <img src={Agro} alt="" className="w-full h-[400px]" />
      </div>
    </div>
  );
};

export default CuttingEdgeApproaches;
