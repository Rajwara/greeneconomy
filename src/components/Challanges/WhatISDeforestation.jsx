import React from "react";
import deforestation from "../../../src/images/What-is-Deforestation.png";

function WhatISDeforestation() {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[100px] mb-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]">
            <div className="pb-[20px] flex flex-col justify-center items-center h-full">
              <div className=" container flex  items-center">
                <img
                  className="w-4/5 mx-auto"
                  src={deforestation}
                  alt="deforestation"
                ></img>
              </div>
            </div>

            <div className="container text-white  flex flex-col justify-center  h-full">
              <h2 className="text-left text-2xl md:text-3xl lg:text-4xl leading-7 lg:leading-10 mb-4 md:mb-6 lg:mb-8 font-montserrat  font-bold text-[#316D69] ">
                What is Deforestation?
              </h2>
              <div className="font-poppins text-sm md:text-base lg:text-lg font-normal leading-5 lg:leading-7 text-[#3c3c3c]">
                <p className=" ">
                  Deforestation is the widespread cutting of forests for many
                  reasons. This could be done for converting forested land for
                  uses such as industrial activities, urban development, and
                  agriculture. The trees are usually cut on a large scale,
                  disrupting the rich biodiversity that forests support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatISDeforestation;
