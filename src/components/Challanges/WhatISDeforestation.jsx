import React from "react";
import deforestation from "../../../src/images/What-is-Deforestation.png";
import bg1 from "../../../src/images/backgroun1.webp";

const divStyle = {
  backgroundImage: `url(${bg1})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover", // You can adjust this property as needed
};

function WhatISDeforestation() {
  return (
    <div className="relative ">
      <div >
        <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-[20px] md:py-[50px]">
 

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
              <h2 className="text-left text-4xl mb-6 font-montserrat  font-bold text-[#316D69] pb-6">
                What is Deforestation?
              </h2>
          <div className="font-poppins text-lg text-black">
          <p className=" pb-[5px]">
                Deforestation refers to the cutting down, clearing, and removal
                of forests by human activity, typically for the purpose of using
                the land for other purposes such as agriculture, urban
                development, or logging
              </p>
              <p className=" ">
                It can also occur as a result of natural causes such as fire or
                disease. Deforestation can have a significant impact on the
                environment, including loss of biodiversity, changes in climate,
                and disruption of local communities and economies.
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
