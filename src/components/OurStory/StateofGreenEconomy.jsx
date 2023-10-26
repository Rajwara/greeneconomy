import React from "react";
// import WMImg2 from "../../../src/images/ourstory-aboutus.png";
import WMImg2 from "../../../src/images/our-story-about-us.png";

function StateAbout() {
  return (
    <div>
      <div className=" grid grid-cols-1  lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 mx-auto mt-[30px]  lg:mt-[50px] mb-[30px] xl:mb-[50px]  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
        <div className="flex flex-col flex-wrap">
          <h6 className="uppercase text-sm md:text-base xl:text-lg text-[#316D69] font-bold leading-7 xl:leading-9	font-montserrat  ">
            {" "}
            Our story
          </h6>
          <h2 className=" text-[#BAB220]  text-2xl md:text-3xl xl:text-4xl mb-2 md:mb-4 xl:mb-6 font-montserrat leading-7 lg:leading-7 xl:leading-10 font-bold">
            State of the Green Economy with Forestry
          </h2>
          <div className="text-sm md:text-base xl:text-lg font-normal text-[#3c3c3c] pb-[10px] leading-5 xl:leading-7">
            <p>
              The experts at Green Economy only have one promise: to achieve
              net-zero carbon emissions. GEP is a firm believer of the fact that
              the climate crisis is an urgent call that’s why our journey to
              achieve net-zero emissions by 2050 has already started. GEP
              encourages carbon offset practices for a sustainable future. It
              holds the highest level of accountability through{" "}
              <a
                href="https://verra.org/"
                className="text-[#D3CA28] font-bold underline"
              >
                Verra’s
              </a>{" "}
              Verified Carbon Standard, paving the way for sustainable
              development where progress and sustainability coexist.
            </p>
            <p className="mt-2 xl:mt-4">
              GEP is all about leaving a legacy for its future generations.
              That’s why its experts have taken an oath of net-zero carbon
              emissions. As leaders in the race of net-zero emissions of UAE,
              and as active participants of{" "}
              <a
                href="https://www.cop28.com/"
                className="text-[#D3CA28] font-bold underline"
              >
                COP28 Dubai,
              </a>{" "}
              our one goal is to ensure that our efforts for the net-zero
              emissions are not just impactful, but transparent. So, let’s build
              the legacy of sustainability together!
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-center">
          <img
            src={WMImg2}
            alt=""
            className="rounded-lg h-full lg:h-[450px]  xl:h-full w-full "
          />
        </div>
      </div>
    </div>
  );
}

export default StateAbout;
