import React from "react";
import banner from "../../../src/images/about-banner.jpg";

const divStyle1 = {
  backgroundImage: `url(${banner})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const ChallangesMission = () => {
  return (
    <div>
      <div className="relative mt-[50px]">
        <div style={divStyle1}>
          <div className=" py-[50px]   text-center  bg-black bg-opacity-50">
            <h1 className="pb-[15px] md:pb-[30px] text-center text-white text-[24px] md:text-[28px] lg:text-[30px] xl:text-[33px] font-[900]">
              {" "}
              Mission 2050{" "}
            </h1>

            <h2 className="text-white text-[20px] lg:text-[22px] font-[700]">
              Let's transform net-zero carbon footprint together by 2050
            </h2>
            <div className="py-[10px]"></div>
            <button className="py-[12px] px-[25px]  hover hover:border-[#BAB220] hover:text-[#BAB220] hover:bg-transparent border border-white border-3  rounded-lg text-white ">
              Register Your Interest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallangesMission;
