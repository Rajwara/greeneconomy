import React from "react";
import videoFile from "../../../src/images/FeasibilityPartnership.MP4";

const Memorandum = () => {
  return (
    <div className="px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px]  lg:mt-[50px] mb-[30px] xl:mb-[50px]">
      <div className="flex flex-col text-center justify-center items-center">
        <h2 className="pb-2 md:pb-4 xl:pb-6 text-center text-[#316D69] leading-7 xl:leading-10  font-bold text-2xl md:text-3xl xl:text-4xl font-montserrat ">
          Memorandum of Understanding{" "}
          <span className="text-[#3c3c3c]"> Signing Ceremony</span>
        </h2>
        <p className="text-sm md:text-base xl:text-lg font-normal text-[#3c3c3c] leading-5 xl:leading-7 font-poppins   lg:w-4/5">
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
