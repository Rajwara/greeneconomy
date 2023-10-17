import React from "react";
import img2 from "../../../src/images/anaerobic-glance.png";

const AnaerobicDigestionGlance = () => {
  return (
    <section className="  py-12 text-[#3C3C3C] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[50px] ">
      <div className=" mx-auto">
        <div className="lg:flex lg:space-x-8 justify-center items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src={img2}
              alt="About Green Economy"
              className="rounded-lg h-full w-full"
            />
          </div>

          <div className="lg:w-1/2 mt-8 md:mt-0 mb-8">
            <h2 className=" text-2xl md:text-3xl lg:text-4xl  text-[#316D69] leading-10 font-montserrat font-bold mb-4">
              Anaerobic Digestion at a Glance
            </h2>
            <div className="mb-3 text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 font-normal font-poppins">
              <p className=" ">
                It is a sustainable process that converts organic matter into
                energy-efficient gas and digestate in the absence of oxygen. As
                part of the integrated waste management system, anaerobic
                digestion reduces the emission of landfill gas into the
                atmosphere.
              </p>
              <p className=" mt-4">
                The process is an efficient way for companies and individuals to
                reduce their environmental footprint. In fact, for every ton of
                organic waste that is processed through anaerobic digestion,
                approximately
                <a
                  href="https://www.epa.gov/sites/default/files/2016-03/documents/warm_v14_organic_materials.pdf"
                  className="text-[#D3CA28] font-bold underline"
                >
                  {" "}
                  0.5-0.7 tons of CO2 emissions
                </a>{" "}
                are avoided.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnaerobicDigestionGlance;
