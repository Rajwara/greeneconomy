import React from "react";
import WMImg2 from "../../../src/images/ourstory-origination.png";

function OurStoryOrigination() {
  return (
    <div className="bg-[#F7F5F2]  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px] pt-[30px] md:pt-[50px] lg:pt-[50px] pb-[50px]">
      <div className=" py-[20px] md:py-[10px] lg:py-[30px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
          <div
            className="container text-left lg:text-left flex flex-col 
         justify-center  h-full"
          >
            <h2 className="text-left text-2xl md:text-3xl lg:text-4xl leading-7 lg:leading-10 font-montserrat  font-bold text-[#BAB220] mb-4 md:mb-6 lg:mb-8">
              Origination{" "}
            </h2>
            <div className="text-sm md:text-base lg:text-lg leading-5 lg:leading-7  mx-auto font-poppins text-[#3c3c3c] font-normal">
              <p className="">
                The experts at the Green Economy Partnership have made a
                noteworthy contribution to enhancing the ability of the
                communities and regions to cope with and bounce back from
                climate disasters. This signifies a holistic approach to
                sustainability.
              </p>
              <p className="mt-4">
                The Green Economy Partnership initiatives are making a real
                impact in Africa as it’s helping the project originators grasp
                carbon finance revenues. With our environmental certifications,
                we are leading by example, delivering ground-breaking results
                for all the stakeholders involved.{" "}
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-0 lg:mt-0">
            <img
              className=" rounded-lg w-full h-full"
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
