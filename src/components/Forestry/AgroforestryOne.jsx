import React from "react";
import Agro from "../../../src/images/Family-farm.jpeg";

const AgroforestryOne = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[50px] mb-[50px]">
      <div className="flex flex-col  ">
        {" "}
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Agroforestry
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal w-4/5">
          It is an intensive land management system that maximizes the
          advantages of the intentional integration of trees with crops and/or
          livestock on the same land. The main goal of agroforestry is to
          increase yeild, reduce environmental degradation, enhance
          animal forage production, and promote tree growth. In North America,
          five fundamental agroforestry practices have emerged which include
          alley cropping, silvopasture, riparian buffers, windbreaks, and forest
          farming.
        </p>
        <a href="/agroforestry">
          <button className="capitalize bg-[#BAB220] mt-6 w-[170px] text-[#F7F5F2] px-6 py-2 rounded font-montserrat text-lg hover:bg-[#EFEDD1] hover:text-[#316D69]	">
            Learn More...
          </button>
        </a>
      </div>
      <div className="img">
        <img src={Agro} alt="" className="w-full h-[400px]" />
      </div>
    </div>
  );
};

export default AgroforestryOne;
