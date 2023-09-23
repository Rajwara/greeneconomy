import React from "react";
import backgroundImage from "../../../src/images/bccmission.jpg";

const CarbonCerditMission = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-80   px-[30px] md:px-[60px] text-center justify-center flex  font-roboto lg:px-[80px] xl:px-[100px] "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h2 className="text-white text-2xl font-bold font-montserrat tracking-normal leading-7">
          Mission 2050
        </h2>
        <p className="text-white text-2xl font-normal font-poppins leading-7">
          Let's transform net-zero carbon footprint together by 2050
        </p>
        <button className="text-white border-2 font-montserrat border-[#316D69] hover:text-[#BAB220] hover:border-white py-3 px-[25px] rounded-lg">
          Register Your Interest
        </button>
      </div>
    </div>
  );
};

export default CarbonCerditMission;
