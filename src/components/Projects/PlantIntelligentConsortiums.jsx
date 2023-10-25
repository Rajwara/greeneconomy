import React from "react";
import img3 from "../../../src/images/plant-intelligent.png";

const PlantIntelligentConsortiums = () => {
  return (
    <div className="flex flex-col text-center mt-[30px] lg:mt-[50px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] items-center">
      <div className="flex gap-2 text-base md:text-lg xl:text-xl font-montserrat leading-7 xl:leading-10 font-bold text-[#3c3c3c]  mb-2 md:mb-4 xl:mb-6">
        <h2 className=" text-[#bab220]">3.</h2>
        <h2 className=" ">Plant Intelligent Consortiums</h2>
      </div>
      <p className="text-sm md:text-base xl:text-lg   text-[#3c3c3c] font-normal font-poppins leading-5 xl:leading-7">
        Foster intelligent consortiums through veggie intercropping for
        sustainable agriculture.{" "}
      </p>
      <img
        src={img3}
        alt="plants"
        className="w-[100%] h-[300px] mt-8 rounded-lg"
      />
    </div>
  );
};

export default PlantIntelligentConsortiums;
