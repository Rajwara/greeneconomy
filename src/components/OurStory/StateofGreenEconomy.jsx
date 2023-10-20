import React from "react";
// import WMImg2 from "../../../src/images/ourstory-aboutus.png";
import WMImg2 from "../../../src/images/testing-img.png";

function StateAbout() {
  return (
    <div className="bg-[#F7F5F2]  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px] relative md:py-[20px] xl:py-[30px]  pt-[50px]  pb-[50px] md:pb-[100px] ">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 items-center justify-center align-middle  ">
        <div
          className=" flex flex-col   align-middle justify-center
          "
        >
          <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold leading-7 lg:leading-9	font-montserrat  ">
            {" "}
            Our story
          </h6>
          <h2 className=" text-[#BAB220]  text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6 lg:mb-8 font-montserrat leading-7 lg:leading-10 font-bold">
            State of the Green Economy with Forestry
          </h2>
          <div className="text-sm md:text-base lg:text-lg font-normal text-[#3c3c3c] pb-[10px] leading-5 lg:leading-7">
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
            <p className="mt-4">
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

        <div className="mt-6 md:mt-0 lg:mt-0 flex items-end justify-end">
          <img
            className=" rounded-lg w-[80%] h-[80%]"
            src={WMImg2}
            alt="deforestation"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default StateAbout;
