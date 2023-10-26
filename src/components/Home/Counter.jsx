import React from "react";

export default function Counter() {
  return (
    <div className="flex flex-col text-center items-center mt-[30px] lg:mt-[50px] mb-[50px] xl:mb-[80px]">
      <h2 className="text-2xl md:text-3xl xl:text-4xl mb-2 md:mb-4 xl:mb-8 font-montserrat font-bold leading-7 xl:leading-10 text-[#316D69]">
        Net-Zero <span className="text-[#3c3c3c]">Catalysts</span>
      </h2>
      <div className=" Conter flex bg-current w-[60%] flex-wrap lg:w-[80%] mx-auto   border-2 border-gray-950 shadow-md rounded-lg  font-roboto sm:flex justify-center   ">
        <div className="flex justify-center  flex-col items-center p-5 xl:w-[25%] lg:w-[25%] md:w-[50%] w-[100%] leading-7 lg:leading-9 text-white">
          <h4 className="font-bold font-poppins xl:text-2xl lg:text-xl md:text-lg sm:text-sm ">
            235-450 Gt
          </h4>
          <span className="border-b-4 border-[#BAB220] w-[25%] m-2"></span>
          <h6 className="text-sm md:text-base lg:text-lg  font-normal font-montserrat">
            Blue Carbon
          </h6>
        </div>

        <div className="flex justify-center flex-col leading-7 lg:leading-9 items-center p-5 xl:w-[25%] lg:w-[25%] md:w-[50%] w-[100%] text-white">
          <h4 className="font-bold font-poppins  xl:text-2xl lg:text-xl md:text-lg sm:text-sm">
            866 Million Tons
          </h4>
          <span className="border-b-4 border-[#BAB220] w-[25%] m-2"></span>
          <h6 className="text-sm md:text-base lg:text-lg font-normal font-montserrat ">
            Forest GHG
          </h6>
        </div>
        <div className="flex justify-center flex-col items-center p-5 xl:w-[25%] lg:w-[25%] md:w-[50%] leading-7 lg:leading-9 w-[100%] text-white">
          <h4 className="font-bold font-poppins xl:text-2xl lg:text-xl md:text-lg sm:text-sm ">
            9%
          </h4>
          <span className="border-b-4 border-[#BAB220] w-[25%] m-2"></span>
          <h6 className="text-sm md:text-base lg:text-lg font-normal font-montserrat ">
            Agriculture GHG
          </h6>
        </div>
        <div className="flex justify-center flex-col text-center items-center bg-[#316D69] leading-7 lg:leading-9 2xl:rounded-r-lg xl:rounded-r-lg lg:rounded-r-lg md:rounded-br-lg lg:p-5 xl:w-[25%] md:w-[50%] lg:w-[25%] w-[100%] text-white p-[2.25rem]">
          <h1 className="font-bold font-poppins xl:text-2xl lg:text-xl md:text-lg sm:text-sm ">
            Net zero emissions target by 2050
          </h1>
          <span className="border-b-4 border-[#BAB220] w-[25%] m-2"></span>
          <a href="/contact-us">
            <h6 className="text-sm md:text-base lg:text-lg font-normal font-montserrat ">
              Get in touch
            </h6>
          </a>
        </div>
      </div>
    </div>
  );
}
