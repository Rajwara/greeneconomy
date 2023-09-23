import React from "react";

import img2 from "../../../src/images/img2.jpg";

function BenefitsofAnaerobic() {
  return (
    <section className="  py-12 text-[#3C3C3C] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] ">
      <div className="container mx-auto">
        <div className="lg:flex lg:space-x-8 justify-center items-center">
          <div className="lg:w-1/2 mt-8 md:mt-0 mb-5">
            <h2 className="text-2xl md:text-3xl text-[#316D69] leading-7 tracking-normal font-montserrat font-bold mb-4">
              Benefits of Anaerobic Digestion
            </h2>
            <p className=" mb-3 text-[#3c3c3c] text-lg leading-7 font-normal font-poppins">
              Anaerobic digestion is a sustainable, eco-friendly and energy
              efficient process used to capture the energy in organic materials
              and convert them into biogas and bio fertilizers.
            </p>
            <h5 className="text-2xl md:text-lg text-[#BAB220] font-bold mb-4 font-montserrat tracking-normal leading-7">
              Standard benefits:
            </h5>
            <ul className="list-disc mb-4 text-left list-inside text-[#3c3c3c] text-lg leading-7 font-normal font-poppins">
              <li>
                Anaerobic digestion is a natural process that breaks down
                biodegradable material in the absence of oxygen.
              </li>
              <li>
                Anaerobic digestion produces methane and carbon dioxide, which
                can be used to generate electricity and heat.
              </li>
            </ul>
            <h5 className="text-2xl md:text-lg text-[#BAB220] font-bold mb-4 tracking-normal leading-7 font-montserrat">
              Emotional benefits:
            </h5>
            <ul className="list-disc text-left list-inside text-[#3c3c3c] text-lg leading-7 font-normal font-poppins">
              <li>Help the environment by using renewable energy.</li>
              <li>Reduce your carbon footprint.</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src={img2}
              alt="About Green Economy"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsofAnaerobic;
