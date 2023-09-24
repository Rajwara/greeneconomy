import React from "react";
import WMImg2 from "../../../src/images/about-state-of-the-gep.jpg";

function StateAbout() {
  return (
    <div className="bg-[#F7F5F2] px-[30px] md:px[60] lg:px-[80px] xl:px-[100px] relative md:py-[20px] xl:py-[30px]  pt-[50px]  pb-[100px] md:pb-[100px] xl:pb-[120px]">
      <h2 className="text-[20px] lg:text-[22px] pb-[20px] font-[700] text-[#316D69] text-center">
        {" "}
        Our story
      </h2>
      <div className=" py-[20px] md:py-[10px] lg:py-[30px]">
        <h3
          className=" pb-[10px] text-[#BAB220]  lg:hidden text-center  leading-[30px] 
                 font-[500] text-[18px] "
        >
          State of the Green Economy with Forestry
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
          <div className=" pb-[20px] lg:hidden flex flex-col justify-center items-center h-full">
            <div className=" container flex justify-center items-center">
              <img
                className="w-full md:h-[400px] rounded-lg"
                src={WMImg2}
                alt="gep"
              ></img>
            </div>
          </div>

          <div
            className="container text-left flex flex-col 
          h-full"
          >
            <h3 className="text-left text-[#BAB220] font-[500]  text-[18px] pb-[20px] lg:block">
              State of the Green Economy with Forestry
            </h3>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] pb-[10PX]">
              Green Economy Partnership leads the way in developing and
              restoring the forestry for carbon capture and ecosystem services
              in the world.
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] pb-[10PX]">
              We are pioneering carbon elimination standard for engineered
              carbon removal methods in the voluntary carbon industry. With the
              fate of our planet's future in balance, we're calling on global
              citizens and government to join us and take action. By working
              together, we can reverse climate change by dramatically reducing
              carbon levels throughout the world. As per Paris agreement offsets
              are not enough to achieve their goals all alone.
            </p>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] ">
              The Oxford Principles for Net Zero Aligned Carbon Offsetting and
              other international initiatives are calling for companies to
              include Carbon Dioxide Removal (CDR) as part of their net zero
              strategy. We identify carbon removal suppliers from various
              methodologies and provide them with a certification that assures
              buyers that they meet our rigorous standards. Our approach will
              help make it possible for businesses and individuals alike to take
              meaningful, measurable action against climate change.
            </p>
          </div>

          <div className="hidden lg:block ">
            <div className="relative  container flex flex-col justify-center items-center h-full">
              <img
                className=" rounded-lg"
                src={WMImg2}
                alt="deforestation"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateAbout;
