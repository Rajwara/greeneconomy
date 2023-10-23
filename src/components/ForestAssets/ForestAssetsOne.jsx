import React from "react";

const ForestAssetsOne = () => {
  return (
    <div className=" px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="flex flex-col  text-center items-center">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-2 md:mb-4 lg:mb-6 md:text-3xl lg:text-4xl leading-7 lg:leading-10  font-montserrat font-bold">
          Forest Assets
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-poppins font-normal  lg:w-4/5">
          In 2005, it was estimated that the global forest area covered at least
          3952 million hectares, representing approximately 30% of the Earth’s
          total land area.
        </p>
      </div>
    </div>
  );
};

export default ForestAssetsOne;
