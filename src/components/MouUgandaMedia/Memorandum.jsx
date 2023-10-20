import React from "react";
import videoFile from "../../../src/images/FeasibilityPartnership.MP4";

const Memorandum = () => {
  return (
    <div className="px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px] md:mt-[50px] lg:mt-[100px] mb-[50px]">
      <div className="flex flex-col text-center justify-center items-center">
        <h2 className="pb-4 md:pb-6 lg:mb-8 text-center text-[#316D69] leading-7  font-bold text-2xl md:text-3xl lg:text-4xl font-montserrat ">
          Memorandum of Understanding{" "}
          <span className="text-[#3c3c3c]"> Signing Ceremony</span>
        </h2>
        <p className="text-sm md:text-base lg:text-lg font-normal text-[#3c3c3c] leading-7 font-poppins   lg:w-4/5">
          The Republic Of Uganda Represented By The Ministry Of Water And
          Environment And Green Economy Sign MoU To Conduct Feasibility Study On
          Reduction Of Carbon Emissions
        </p>
      </div>
      <div className="w-full h-ful mt-[50px]">
        <video className="w-full h-[50%]" controls autoPlay>
          <source src={videoFile} type="video/mp4" />
          {/* Add additional source elements for other video formats if needed */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Memorandum;
