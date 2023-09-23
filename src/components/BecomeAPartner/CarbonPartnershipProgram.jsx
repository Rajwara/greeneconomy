import React from "react";

import check from "../../../src/images/check4.png";
import banner from "../../../src/images/p2i1.png";

const bannerbg = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  /* Any additional styles you want to apply */
};

const mediaQuery320 = `@media (max-width: 320px) {
        background-size: 50% auto;
      }`;

function CarbonPartnershipProgram() {
  return (
    <header
      style={bannerbg}
      className="bg-[#BAB220] text-[#EFEDD1] pt-20 pb-16 px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px]"
    >
      <div className="container mx-auto text-left">
        <h1 className="flex items-center text-[#BAB220] text-3xl font-bold mb-6">
          Carbon Partnership Program
        </h1>
        <ul className="text-lg leading-loose space-y-2">
          <li className="flex xs:items-start items-center">
            <img
              src={check}
              alt="Point Image"
              className="h-6 w-auto mt-2 mr-2"
            />
            Provide additional value to your customers
          </li>
          <li className="flex xs:items-start items-center">
            <img
              src={check}
              alt="Point Image"
              className="h-6 w-auto mt-2 mr-2"
            />
            Diversify revenue streams
          </li>
          <li className="flex xs:items-start items-center">
            <img
              src={check}
              alt="Point Image"
              className="h-6 w-auto mt-2 mr-2"
            />
            Help farmers transition to net-zero farming
          </li>
        </ul>
        <button className="mt-10 bg-transparent shadow-2xl text-[#BAB220] border-solid hover:border-[#BAB220] border-2 px-[25px] py-[12px] rounded-lg font-semibold hover:text-[#EFEDD1] transition duration-300">
          Get in Touch With Us
        </button>
        <style>{mediaQuery320}</style>
      </div>
    </header>
  );
}

export default CarbonPartnershipProgram;
