import React from "react";

const WindandSolar1 = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center  mx-auto px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] pb-10">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-[#316D69] mb-8 leading-10  font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl ">
          Wind and
          <span className="text-[#bab220]"> Solar</span>
        </h2>
        <div className="text-sm md:text-base lg:text-lg font-normal  text-[#3c3c3c] font-poppins leading-7  w-4/5">
          <p className="mt-0">
            Due to their potential for making a positive impact, wind and solar
            energy have started becoming more popular. Both solar and wind
            energy offer an efficient means of generating electricity while
            reducing our reliance on fossil fuels. The wind and solar energy
            resources are known for their significantly lower emisisons compared
            to other methods of energy production.
          </p>
          <p className="mt-4">
            Solar energy is generated by harnessing the sun’s radiant energy and
            converting it into usable electricity through solar panels or solar
            cells. On the other hand, wind energy take the advantage of wind
            turbines to capture kinetic energy from moving air and effectively
            transform it into electricity.
          </p>
          <p className="mt-4">
            As our dependence on solar and wind energy continues to grow, we are
            laying foundations for a more environmentally friendly and
            sustainable future for the future generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WindandSolar1;
