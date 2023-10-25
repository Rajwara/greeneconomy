import React from "react";
import banner from "../../../src/images/anaerobic-benefits.png";

const AnaerobicDigestionofBenefits = () => {
  return (
    <div className="flex flex-row  lg:items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] md:mt-[50px] lg:mt-[50px] mt-[30px] mb-[30px] xl:mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
        <div className="text-sm md:text-base lg:text-lg font-normal mt-4 font-poppins leading-5 lg:leading-7 text-[#3c3c3c]">
          <h2 className="text-2xl md:text-3xl xl:text-4xl  text-[#316D69] leading-7 xl:leading-10  font-montserrat font-bold  mb-2 md:mb-4 xl:mb-6 ">
            Benefits of Anaerobic Digestion
          </h2>
          <div className="mb-2 md:mb-4 xl:mb-6 text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal font-poppins">
            <p className=" ">
              In Anaerobic Digestion, biogas is produced which is a mixture of
              methane and carbon dioxide. In addition, what we also get is a
              nutrient-rich substance; digestate. This process is becoming very
              popular for waste management solutions, especially in Dubai from
              the point of view of renewable energy sources.
            </p>
          </div>
          <ul className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal font-poppins list-disc">
            <h6 className="uppercase text-sm md:text-base xl:text-lg text-[#316D69] font-bold leading-7 xl:leading-9	font-montserrat mb-2 xl:mb-4">
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
          <div className="mb-3 text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal font-poppins">
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
        <div className="flex items-center  ">
          <img
            src={banner}
            className="h-full lg:h-[500px] xl:h-[500px] w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AnaerobicDigestionofBenefits;
