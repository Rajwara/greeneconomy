import React from "react";

import check from "../../../src/images/check4.png";

function GepCarbon() {
  return (
    <div className="bg-gradient-to-r from-[#5DA344] to-[#D3CA28] text-[#f7f5f2] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-3xl font-bold mb-10 xs:pb-14 lg:!pb-2 font-montserrat tracking-normal leading-7">
          How does GEP Carbon program work?
        </h1>
        <div className="animate-bounce">
          <svg
            className="w-10 h-10 text-[#EFEDD1] mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <ul className="grid grid-cols-2 xs:grid-cols-1 md:!grid-cols-2 lg:!ml-32 ml-0 text-left leading-loose ">
            <li className="flex items-start">
              <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
              <p className="text-[#f7f5f2] text-lg font-normal font-poppins leading-7">
                {" "}
                Carbon audit
              </p>
            </li>
            <li className="flex items-start">
              <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
              <p className="text-[#f7f5f2] text-lg font-normal font-poppins leading-7">
                {" "}
                Implementation and data collection
              </p>
            </li>
            <li className="flex items-start">
              <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
              <p className="text-[#f7f5f2] text-lg font-normal font-poppins leading-7">
                {" "}
                Contract & Practice Plan
              </p>
            </li>
            <li className="flex items-start">
              <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
              <p className="text-[#f7f5f2] text-lg font-normal font-poppins leading-7">
                {" "}
                Credit verification & issuance in Y5 & Y10
              </p>
            </li>
            <li className="flex items-start">
              <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
              <p className="text-[#f7f5f2] text-lg font-normal font-poppins leading-7">
                Set the baseline and initial soil samples{" "}
              </p>
            </li>
            <li className="flex items-start">
              <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
              <p className="text-[#f7f5f2] text-lg font-normal font-poppins leading-7">
                {" "}
                Selling certified credits{" "}
              </p>
            </li>
            <li className="flex items-start">
              <img src={check} alt="Point Image" className="h-6 w-auto mr-2" />
              <p className="text-[#f7f5f2] text-lg font-normal font-poppins leading-7">
                Selling first year’s pre-certified credits
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GepCarbon;
