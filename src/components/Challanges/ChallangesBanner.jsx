import React from "react";
import banner from "../../../src/images/about-banner.jpg";
import banner2 from "../../../src/images/Challenges-Banner.jpg";


const divStyle1 = {
  backgroundImage: `url(${banner})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const divStyle2 = {
  backgroundImage: `url(${banner2})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function ChallangeBanner() {
  return (
    <div className="relative">
      <div style={divStyle2}>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] flex flex-col justify-center text-start	h-[400px]  bg-[#000000] bg-opacity-60 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-tight font-[900] text-[#BAB220] font-montserrat" >
            Challenges and Solutions
          </h1>
          <p className="font-poppins text-lg text-[#EFEDD1] mt-6">Tag Line for Challenges and Solutions</p>

          <div className="pt-[20px]">
            <button className="py-[12px] px-[25px]   hover:border-[#F7F5F2] bg-[#EFEDD1] hover:bg-[#F7F5F2] hover:text-[#316D69]  border border-white border-3  rounded-lg text-[#316D69] font-montserrat font-medium ">
              Register Your Interest
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
}
function Mission() {
  return (
    <div className="relative mt-[50px]">
      <div style={divStyle1}>
        <div className=" py-[50px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  text-center  bg-black bg-opacity-50">
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
  );
}

export { Mission, ChallangeBanner };
