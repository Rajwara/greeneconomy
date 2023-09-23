import React from "react";
// import Button from './Button'

const MissionButton = () => {
  return (
    <div className="  mx-auto mt-14 mb-14 bg-[#316D69] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="flex flex-wrap justify-between mx-auto grid-cols-2 items-center py-12 ">
        <div className=" text-left">
          <h3 className="font-montserrat text-3xl font-bold text-[#F7F5F2] pb-4">
            Mission 2050
          </h3>
          <p className="font-poppins text-lg font-normal text-[#F7F5F2]">
            Let's transform net-zero carbon footprint together by 2050
          </p>
        </div>
        <div className="text-center">
          <button className="capitalize bg-[#BAB220] mt-6 sm:mt-6 md:mt-6 lg:mt-0 text-white px-6 py-2 rounded font-montserrat text-lg hover:bg-[#EFEDD1] hover:text-[#316D69]	">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default MissionButton;
