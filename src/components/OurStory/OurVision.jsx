import React from "react";
import SolutionsHomeimg2 from "../../../src/images/ourstory-ourvision.png";

function OurVision() {
  return (
    <div>
      <div className=" grid grid-cols-1  lg:grid-cols-2 gap-14 mx-auto mt-[30px] md:mt-[50px] lg:mt-[100px]   px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
        <div className="flex align-middle">
          <img src={SolutionsHomeimg2} alt="" className="h-auto" />
        </div>

        <div className="flex flex-col flex-wrap">
          <div className=" mb-4 md:mb-6 lg:mb-8 ">
            <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold leading-7 lg:leading-9	font-montserrat">
              Our Vision
            </h6>

            <h2 className="text-[#BAB220] text-2xl md:text-3xl lg:text-4xl leading-7 lg:leading-10 font-montserrat font-bold">
              On the Road to Building a Climate Resilient Future and Sustainable
              Development
            </h2>
          </div>

          <div className="text-sm md:text-base lg:text-lg leading-5 lg:leading-7 text-[#3c3c3c] font-normal font-poppins">
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
            <p className="mt-4">
              Our heritage and expertise in the green economy allow us to
              identify the loopholes in developing net-zero strategies to reach
              Sustainable Development Goals (SDGs).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurVision;
