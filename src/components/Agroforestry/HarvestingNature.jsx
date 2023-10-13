import React from "react";
import Mangroves1 from "../../../src/images/agriculture-trac.jpg";

const HarvestingNature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="flex flex-col justify-center ">
        {" "}
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Harvesting Nature’s
          <span className="text-[#bab220]"> Benefits </span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal ">
          The practice of agriculture has stood the test of time. Planting trees
          to support soil quality and crop yield is something that we have been
          doing for centuries. Trees develop deep-root systems that bolster soil
          retention, produce nutrients for neighboring plants, and attract
          beneficial pollinators. They offer shade, protection, and other
          environmental benefits.
        </p>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal mt-4 ">
          Additionally, they yield a variety of fresh produce, including fruits
          like mangoes, cashews, and avocados.
        </p>
      </div>
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-[450px]" />
      </div>
    </div>
  );
};

export default HarvestingNature;
