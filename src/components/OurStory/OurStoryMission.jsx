import React from "react";
import banner from "../../../src/images/about-banner.jpg";
import banner2 from "../../../src/images/Banner.jpg";

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

function Banner() {
  return (
    <div className="relative">
      <div style={divStyle2}>
        <div className="pt-[100px] lg:pt-[150px] text-center pb-[50px] lg:pb-[200px] bg-yellow-500 bg-opacity-30 ">
          <h2
            className=" text-white leading-[40px] pb-[15px] py-[10px] text-[35px] md:text-[50px] 
            lg:tracking-wider lg:text-[50px] font-[800]"
          >
            Challenges and Solutions
          </h2>

          <div className="py-[50px]">
            <button className="py-[6px]  px-[20px] bg-transparent border-white border-4 rounded-3xl text-white  hover:hover:border-yellow-500 hover:text-yellow-500">
              Register Your Interest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function OurStoryMission() {
  return (
    <div className="relative mt-[50px]">
      <div style={divStyle1}>
        <div className="pt-[80px] pb-[30px] text-center  bg-black bg-opacity-50">
          <h2
            className="pb-[15px] md:pb-[30px] text-center text-white leading-[30px]  font-[900] 
                   lg:font-[700] text-[20px] md:text-[30px] lg:text-[40px]"
          >
            {" "}
            Mission 2050{" "}
          </h2>

          <p className="text-white md:text-[20px] font-[800]">
            Let's transform net-zero carbon footprint together by 2050
          </p>
          <div className="py-[10px]"></div>
          <button className="py-[12px] px-[25px]  hover hover:border-[#BAB220] hover:text-[#BAB220] hover:bg-transparent border border-white border-3  rounded-lg text-white ">
            Register Your Interest
          </button>
        </div>
      </div>
    </div>
  );
}

export { OurStoryMission, Banner };
