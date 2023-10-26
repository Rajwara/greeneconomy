import React from "react";
import SolutionsHomeimg2 from "../../../src/images/ourstory-ourvision.png";

function OurVision() {
  return (
    <div>
      <div className=" grid grid-cols-1 justify-center items-center  lg:grid-cols-2 gap-6 md:gap-10 lg:gap-14 mx-auto mt-[30px]  lg:mt-[50px] mb-[30px] xl:mb-[50px]  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
        <div className=" align-middle hidden md:hidden lg:block">
          <img
            src={SolutionsHomeimg2}
            alt=""
            className="h-full lg:h-[450px] xl:h-full w-full"
          />
        </div>

        <div className="flex flex-col flex-wrap">
          <div className=" mb-2 md:mb-4 xl:mb-6 ">
            <h6 className="uppercase text-sm md:text-base xl:text-lg text-[#316D69] font-bold leading-7 xl:leading-9	font-montserrat">
              Our Vision
            </h6>

            <h2 className="text-[#BAB220] text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10 font-montserrat font-bold">
              On the Road to Building a Climate Resilient Future and Sustainable
              Development
            </h2>
          </div>

          <div className="text-sm md:text-base xl:text-lg leading-5 xl:leading-7 text-[#3c3c3c] font-normal font-poppins">
            <p className="">
              Our vision is to accelerate the transition to a green economy that
              promotes sustainable development. To achieve this, our company
              helps the government and clients design and implement carbon
              reduction strategies in accordance with the{" "}
              <a
                href="https://www.un.org/en/climatechange/paris-agreement"
                className="text-[#D3CA28] font-bold underline"
              >
                Paris Agreement.
              </a>{" "}
              Our experts believe that changing ways for economic sustainability
              requires efforts from all the stakeholders involved. Hence, they
              collaborate with them to devise projects that align with their
              requirements.
            </p>
            <p className="mt-2 xl:mt-4">
              Our heritage and expertise in the green economy allow us to
              identify the loopholes in developing net-zero strategies to reach
              Sustainable Development Goals (SDGs).
            </p>
          </div>
        </div>
        <div className="lg:hidden xl:hidden align-middle ">
          <img src={SolutionsHomeimg2} alt="" className="  h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default OurVision;
