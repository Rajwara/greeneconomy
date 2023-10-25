import React from "react";
import WMImg2 from "../../../src/images/ourstory-origination.png";

function OurStoryOrigination() {
  return (
    <div className="bg-[#F7F5F2]  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px] pt-[30px]  lg:pt-[50px] pb-[30px] xl:pb-[50px]">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px] items-center">
          <div
            className="container text-left lg:text-left flex flex-col 
         justify-center  h-full"
          >
            <h2 className="text-left text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10 font-montserrat  font-bold text-[#BAB220] mb-2 md:mb-4 xl:mb-6">
              Origination{" "}
            </h2>
            <div className="text-sm md:text-base xl:text-lg leading-5 xl:leading-7  mx-auto font-poppins text-[#3c3c3c] font-normal">
              <p className="">
                The experts at the Green Economy Partnership have made a
                noteworthy contribution to enhancing the ability of the
                communities and regions to cope with and bounce back from
                climate disasters. This signifies a holistic approach to
                sustainability.
              </p>
              <p className="mt-2 xl:mt-4">
                The Green Economy Partnership initiatives are making a real
                impact in Africa as it’s helping the project originators grasp
                carbon finance revenues. With our environmental certifications,
                we are leading by example, delivering ground-breaking results
                for all the stakeholders involved.{" "}
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-6 lg:mt-0">
            <img
              className=" rounded-lg w-full h-full lg:h-[300px] xl:h-full"
              src={WMImg2}
              alt="deforestation"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStoryOrigination;
