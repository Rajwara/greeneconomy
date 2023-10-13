import React from "react";
import img3 from "../../../src/images/Plant-intelligent-consortiums.jpg";

const PlantIntelligentConsortiums = () => {
  return (
    <div className="flex flex-col text-center mt-[100px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] items-center" >
     <div className="flex gap-2 text-xl font-montserrat  font-bold text-[#3c3c3c] mt-2 ">
            <h2 className="mb-6 text-[#bab220]">3.</h2>
            <h2 className="mb-6 ">Plant intelligent consortiums</h2>
          </div>
      <p className="text-lg mt-4 text-[#3c3c3c] font-normal font-poppins leading-7">
        Foster intelligent consortiums through veggie intercropping for
        sustainable agriculture.{" "}
      </p>
      <img src={img3} alt="plants" className="w-[100%] h-[300px] mt-8" />
    </div>
  );
};

export default PlantIntelligentConsortiums;
