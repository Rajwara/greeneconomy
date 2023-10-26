import React from "react";
import Gep from "../../../src/images/anaerobic-consultancy.png";

const GEPAnaerobicDigestionConsultancy = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] items-center lg:mt-[50px] mb-[30px]  xl:mb-[50px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
      <div className="flex flex-col">
        <h2 className="text-2xl md:text-3xl xl:text-4xl text-[#316D69] leading-7 xl:leading-10  font-montserrat font-bold  mb-2 md:mb-4 xl:mb-6 ">
          GEP’s Anaerobic Digestion{" "}
          <span className="text-[#bab220]">Consultancy</span>
        </h2>
        <div className="mb-3 text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal font-poppins">
          <p className=" ">
            Green Economy Partnership provides consultancy services for you to
            uncover the potential of anaerobic digestion. It also offers an
            efficient solution to address waste management challenges and
            harness renewable energy resources.
          </p>
          <p className=" mt-2 xl:mt-4">
            Through anaerobic digestion, you will not only contribute to
            reducing the global carbon footprint but also establish an
            economical system to generate power. Our team of experts will help
            you make well-informed decisions, as they are dedicated to enhancing
            your quality of life
          </p>
        </div>
      </div>
      <div className="">
        <img
          src={Gep}
          alt=""
          className="w-full h-full lg:h-[350px] xl:hull rounded-lg"
        />
      </div>
    </div>
  );
};

export default GEPAnaerobicDigestionConsultancy;
