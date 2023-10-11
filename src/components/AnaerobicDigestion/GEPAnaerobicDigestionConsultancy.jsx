import React from "react";
import Gep from "../../../src/images/AboutusHome.png";

const GEPAnaerobicDigestionConsultancy = () => {
  return (
    <div className="px-[30px] md:px-[60px] mb-12 lg:px-[80px] xl:px-[100px] mt-[50px] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
      <div className="flex flex-col">
        <h2 className="text-4xl text-[#316D69] leading-10 tracking-normal font-montserrat font-bold mb-8">
          GEP’s Anaerobic Digestion{" "}
          <span className="text-[#bab220]">Consultancy</span>
        </h2>
        <div className="mb-3 text-[#3c3c3c] text-lg leading-7 font-normal font-poppins">
          <p className=" ">
            Green Economy Partnership provides consultancy services for you to
            uncover the potential of anaerobic digestion. It also offers an
            efficient solution to address waste management challenges and
            harness renewable energy resources.
          </p>
          <p className=" mt-4">
            Through anaerobic digestion, you will not only contribute to
            reducing the global carbon footprint but also establish such an
            economical system to generate power. Our team of experts will help
            you make well-informed decisions, as they are dedicated to enhancing
            your quality of life
          </p>
        </div>
      </div>
      <div className="">
        <img src={Gep} alt="" className="w-full h-[400px]" />
      </div>
    </div>
  );
};

export default GEPAnaerobicDigestionConsultancy;
