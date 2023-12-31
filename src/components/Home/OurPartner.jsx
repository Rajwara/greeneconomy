import React from "react";
import guineabissau from "../../../src/images/Emblem_of_Guinea-Bissau.png";
import ugandalogo from "../../../src/images/Coat_of_arms_of_Uganda.png";
import zanzibarlogo from "../../../src/images/zanzibarlogo.png";

const OurPartner = () => {
  return (
    <div className="bg-[#EFEDD1] pb-[30px] xl:pb-[50px] pt-[30px] lg:pt-[50px] mt-10 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className=" mx-auto font-roboto text-center  ">
        <div>
          <h2 className="text-2xl mb-2 md:mb-4 xl:mb-6 md:text-3xl xl:text-4xl leading-7 xl:leading-10  font-montserrat font-bold text-[#316D69]">
            Our Partners
          </h2>
          {/* <p className="mt-4 font-poppins text-lg">Our Happy Clients</p> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  mx-auto justify-evenly mt-10 gap-8">
          <div className="shadow-lg bg-white shadow-[#3c3c3c] h-full flex flex-col items-center  hover:shadow-[#316D69] px-14 py-6 mb-4 rounded-lg">
            <img className="w-[90%] h-[70%]  " src={guineabissau} alt="" />
            <h4 className="font-montserrat text-[#3c3c3c] text-base md:text-lg xl:text-xl font-bold mt-10 h-10 leading-7 xl:leading-9">
              Government of Guinea-Bissau
            </h4>
          </div>
          <div className="shadow-lg bg-white shadow-[#3c3c3c] h-full hover:shadow-[#316D69] flex flex-col items-center  px-14 py-6 mb-4 rounded-lg">
            <img className="w-[90%] h-[70%]  " src={ugandalogo} alt="" />
            <h4 className="font-montserrat text-[#3c3c3c] text-base md:text-lg xl:text-xl h-10 font-bold mt-10  leading-7 xl:leading-9">
              Government of Uganda
            </h4>
          </div>
          <div className="shadow-lg bg-white shadow-[#3c3c3c] h-full hover:shadow-[#316D69] flex flex-col items-center  px-14 py-6 rounded-lg">
            <img className="w-[90%] h-[70%]  " src={zanzibarlogo} alt="" />
            <h4 className="font-montserrat text-[#3c3c3c] text-base md:text-lg xl:text-xl h-10 font-bold mt-10 leading-7 xl:leading-9">
              Government of Zanzibar
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
