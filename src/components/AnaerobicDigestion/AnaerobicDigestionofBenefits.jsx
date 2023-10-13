import React from "react";
import banner from "../../../src/images/GEPs-Anaerobic-Digestion-Consultancy.png";

const AnaerobicDigestionofBenefits = () => {
  return (
    <div className="  py-12 text-[#3C3C3C] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[0px] ">
      <div className=" mx-auto">
        <div className="lg:flex lg:space-x-8 justify-center items-center gap-8">
          <div className="lg:w-1/2 mt-8 md:mt-0 mb-5">
            <h2 className="text-4xl  text-[#316D69] leading-7 tracking-normal font-montserrat font-bold mb-8">
              Benefits of Anaerobic Digestion
            </h2>
            <div className="mb-6 text-[#3c3c3c] text-lg leading-7 font-normal font-poppins">
              <p className=" ">
                In Anaerobic Digestion, biogas is produced which is a mixture of
                methane and carbon dioxide. In addition, what we also get is a
                nutrient-rich substance; digestate. This process is becoming very
                popular for waste management solutions, especially in Dubai from
                the point of view of renewable energy sources.
              </p>
            </div>
            <ul className="text-[#3c3c3c] text-lg leading-7 font-normal font-poppins list-disc">
              <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-4">
                Here are a few benefits of anaerobic digestion:
              </h6>
              <li className="ml-8 mb-2">Energy independence</li>
              <li className="ml-8 mb-2">Sustainable food production </li>
              <li className="ml-8 mb-2">Conservation of agricultural land</li>
              <li className="ml-8 mb-2">
                Energy production with no net increase in atmospheric CO2
              </li>
              <li className="ml-8 mb-2">Sustainable agriculture</li>
              <li className="ml-8 mb-2">Job Creation</li>
            </ul>
            <div className="mb-3 text-[#3c3c3c] text-lg leading-7 font-normal font-poppins">
              <p className=" ">
                With{" "}
                <a
                  href="https://www.google.com/url?q=https://www.eesi.org/papers/view/fact-sheet-biogasconverting-waste-to-energy&sa=D&source=docs&ust=1696970085382753&usg=AOvVaw2eqsprEfowtNYtp104brfk"
                  className="text-[#D3CA28] font-bold underline"
                >
                  100 tons of food waste per day
                </a>
                , anaerobic digestion has the potential to generate energy to
                power 800 to 1,400 homes each year.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src={banner}
              alt="About Green Economy"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnaerobicDigestionofBenefits;
