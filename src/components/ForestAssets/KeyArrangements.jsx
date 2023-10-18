import React from "react";
import Agro from "../../../src/images/forestasset-key-arrangements.png";

const KeyArrangements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[100px] mb-[50px]">
      <div className="flex flex-col justify-center ">
        {" "}
        <h2 className="text-[#316D69] text-2xl mb-4 md:mb-6 lg:mb-8 md:text-3xl lg:text-4xl leading-7 lg:leading-10  font-montserrat font-bold">
          Key arrangements for the management of tropical
          <span className="text-[#bab220]"> forestry are as given:</span>
        </h2>
        <ul>
          <li className="flex flex-col">
            <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold leading-7 lg:leading-9	font-montserrat mb-4">
              1. Private land
            </h6>
            <div className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-poppins font-normal  ml-6">
              <p className="">a. Private plantation management</p>
              <p className="mt-2">b. Private natural forest management</p>
              <p className="mt-2">c. Wood processor (vertically integrated)</p>
              <p className="mt-2">d. Small grower</p>
            </div>
          </li>
          <li className="flex flex-col mt-2">
            <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold leading-7 lg:leading-9	font-montserrat mb-4">
              2. Government land
            </h6>
            <div className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal  ml-6">
              <p className="">a. Government management (forest reserves)</p>
              <p className="mt-2">b. Concession management</p>
              <p className="mt-2">c. Conservation management</p>
            </div>
          </li>
          <li className="flex flex-col mt-2">
            <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold leading-7 lg:leading-9	font-montserrat mb-4">
              3. Community Forests and Forestry Associations
            </h6>
          </li>
          <li className="flex flex-col">
            <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#316D69] font-bold	leading-7 lg:leading-9 font-montserrat mb-4">
              4. Company Community Partnerships
            </h6>
          </li>
        </ul>
      </div>
      <div className="img">
        <img src={Agro} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default KeyArrangements;
