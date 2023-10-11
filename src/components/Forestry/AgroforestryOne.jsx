import React from "react";

const AgroforestryOne = () => {
  return (
    <div className="flex justify-center gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="flex flex-col text-center items-center ">
        {" "}
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Agroforestry
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal w-4/5">
          It is an intensive land management system that maximizes the
          advantages of the intentional integration of trees with crops and/or
          livestock on the same land. The main goal of agroforestry is to
          increase productivity, reduce environmental degradation, enhance
          animal forage production, and promote tree growth. In North America,
          five fundamental agroforestry practices have emerged which include
          alley cropping, silvopasture, riparian buffers, windbreaks, and forest
          farming.
        </p>
        <button className="capitalize bg-[#BAB220] mt-6 sm:mt-0 md:mt-0 lg:mt-0 text-[#F7F5F2] px-6 py-2 rounded font-montserrat text-lg hover:bg-[#EFEDD1] hover:text-[#316D69]	">
          Learn More...
        </button>
      </div>
    </div>
  );
};

export default AgroforestryOne;
