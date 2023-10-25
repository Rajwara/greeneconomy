import React from "react";
import deforestation from "../../../src/images/What-is-Deforestation.png";

function WhatISDeforestation() {
  return (
    <div className="relative ">
      <div>
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px]  lg:mt-[50px] mb-[30px] xl:mb-[50px]">
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
              <h2 className="text-left text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10 mb-2 md:mb-4 xl:mb-6 font-montserrat  font-bold text-[#316D69] ">
                What is Deforestation?
              </h2>
              <div className="font-poppins text-sm md:text-base xl:text-lg font-normal leading-5 xl:leading-7 text-[#3c3c3c]">
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
