import React from "react";
import Mangroves1 from "../../../src/images/agro-harvesting.png";

const HarvestingNature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px]  lg:mt-[50px] mb-[30px] xl:mb-[50px]">
      <div className="flex flex-col justify-center">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-2 md:mb-4 xl:mb-6 md:text-3xl xl:text-4xl leading-7 xl:leading-10  font-montserrat font-bold">
          Harvesting Nature’s
          <span className="text-[#bab220]"> Benefits </span>
        </h2>
        <div className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7  font-poppins font-normal ">
          <p className=" ">
            The practice of agriculture has stood the test of time. Planting
            trees to support soil quality and crop yield is something that we
            have been doing for centuries. Trees develop deep-root systems that
            bolster soil retention, produce nutrients for neighboring plants,
            and attract beneficial pollinators. They offer shade, protection,
            and other environmental benefits.
          </p>
          <p className=" mt-2 xl:mt-4 ">
            Additionally, they yield a variety of fresh produce, including
            fruits like mangoes, cashews, and avocados.
          </p>
        </div>
      </div>
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default HarvestingNature;
