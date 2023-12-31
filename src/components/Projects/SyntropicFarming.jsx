import React from "react";

const SyntropicFarming = () => {
  return (
    <div className=" flex flex-col text-center  dark:bg-white overflow-hidden  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  lg:flex lg:items-center">
      <div className=" pb-[10px] md:pb-[20px] text-center  ">
        <div className="flex flex-col items-center text-center">
          <h2 className=" text-2xl md:text-3xl font-bold text-center leading-7  mb-2 md:mb-4 xl:mb-6   xl:leading-10 xl:text-4xl font-montserrat text-[#316D69] dark:text-[#316D69]">
            <span className="text-[#bab220]">A. </span>
            Syntropic Farming
          </h2>
          <span className="border-2 border-[#3c3c3c] w-[20%] mt-2 lg:mt-4 ">
            {" "}
          </span>
        </div>
        <div className="flex flex-col text-sm md:text-base xl:text-lg  text-center justify-center items-center mt-2 md:mt-4 xl:mt-6 text-[#3c3c3c] font-normal font-poppins leading-5 xl:leading-7">
          <p className="  lg:w-9/12">
            Syntropic farming, introduced by a Swiss farmer and researcher,
            Ernst Götsch, is a form of regenerative agriculture that combines
            forestry and agriculture to yield high output and rejuvenate soil.
          </p>
          <p className="mt-2  xl:mt-4  lg:w-9/12">
            Unlike traditional farming that relies on external inputs, Syntropic
            farming replicates and accelerates ecological succession and
            stratification spacing each plant optimally in both space and time.
            It’s characterized by its regenerative nature, and
            self-sustainability.
          </p>
          <h6 className="text-sm md:text-base xl:text-lg  mt-4  mb-6 font-montserrat leading-7 xl:leading-9  font-bold text-[#bab220]">
            <span className="text-[#bab220] border-b-4 border-[#3c3c3c]">
              {" "}
              Let Nature{" "}
            </span>
            Nurture
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SyntropicFarming;
