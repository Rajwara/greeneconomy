import React from "react";
import img1 from "../../../src/images/agriculture-nature-based-assets.png";

function AgricultureAssets() {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-[50px] ">
        <div className="">
          <img className="h-full w-full rounded-lg" src={img1} alt=""></img>
        </div>
        <div className=" text-white  flex flex-col justify-center  ">
          <h2 className="  mb-2 md:mb-4 lg:mb-6   text-[#316D69] leading-7 lg:leading-10 font-bold text-2xl md:text-3xl lg:text-4xl font-montserrat">
            Nature-Based Assets and{" "}
            <span className="text-[#BAB220]"> Agriculture</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#3c3c3c] font-normal leading-5 lg:leading-7 font-poppins">
            Nature-based assets play a vital role in agriculture, acting as a
            critical component in fostering sustainable and environmentally
            responsible practices in the sector.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-[#3c3c3c] font-normal leading-5 lg:leading-7 font-poppins mt-2 lg:mt-4">
            {" "}
            These assets refer to the natural resources essential for
            agriculture, and include elements like fertile soil, clean water
            resources, and topography of the land. They are fundamental to the
            success and sustainability of agriculture.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AgricultureAssets;
