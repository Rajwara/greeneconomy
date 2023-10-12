import React from "react";
import Agro from "../../../src/images/Family-farm.jpeg";

const KeyArrangements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="flex flex-col  ">
        {" "}
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Key arrangements for the management of tropical
          <span className="text-[#bab220]"> forestry are as given:</span>
        </h2>
        <ul>
          <li className="flex flex-col">
            <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-4">
              2. Private land
            </h6>
            <div className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal  ml-6">
              <p className="">a. Private plantation management</p>
              <p className="mt-2">b. Private natural forest management</p>
              <p className="mt-2">c. Wood processor (vertically integrated)t</p>
              <p className="mt-2">d. Small grower</p>
            </div>
          </li>
          <li className="flex flex-col mt-2">
            <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-4">
              1. Government land
            </h6>
            <div className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal  ml-6">
              <p className="">a. Government management (forest reserves)</p>
              <p className="mt-2">b. Concession management</p>
              <p className="mt-2">c. Conservation management</p>
            </div>
          </li>
          <li className="flex flex-col mt-2">
            <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-4">
              3. Community Forests and Forestry Associations
            </h6>
          </li>
          <li className="flex flex-col">
            <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-4">
              4. Company Community Partnerships
            </h6>
          </li>
        </ul>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
          Here, we delve deeper into the actions taken by the forest managers,
          shedding light on the commercial and financial aspects of each.
        </p>
      </div>
      <div className="img">
        <img src={Agro} alt="" className="w-full h-[400px]" />
      </div>
    </div>
  );
};

export default KeyArrangements;
