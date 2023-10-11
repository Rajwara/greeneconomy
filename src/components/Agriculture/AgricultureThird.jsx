import React from "react";
import img1 from "../../../src/images/agricultural-runoff.jpg";

function AgricultureThird() {
  return (
    <section className="flex items-center flex-col bg-[#f7f5f2] gap-8 lg:flex-row justify-center py-0 lg:py-16 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      {/* Left Column - Heading and Paragraph */}
      <div className="lg:w-1/2  my-10 lg:my-0">
        <h2 className=" mb-6 tracking-normal text-[#316D69] leading font-bold text-3xl font-montserrat">
          What is Agriculture
        </h2>
        <p className="text-lg text-[#3c3c3c] font-normal font-poppins leading-7 mb-8">
          Agriculture can play a role in carbon sequestration, the process of
          removing carbon dioxide from the atmosphere and storing it in the soil
          and vegetation. This can be accomplished through various practices,
          including:
        </p>
        <ul className="list-disc list-inside gap-4 font-poppins  leading-7 mb-8">
          <li className="text-[#3c3c3c] font-normal text-base ">
            Conservation tillage: reducing soil disturbance, which can increase
            organic matter in the soil and promote carbon sequestration.
          </li>
          <li className="text-[#3c3c3c] font-normal text-base font-poppins  leading-7">
            Cover cropping: planting crops that protect the soil and promote
            carbon sequestration, such as legumes.
          </li>
          <li className="text-[#3c3c3c] font-normal text-base font-poppins  leading-7 ">
            Agricultural rotation: alternating between different types of crops,
            which can help increase the amount of carbon stored in the soil.
          </li>
          <li className="text-[#3c3c3c] font-normal text-base font-poppins  leading-7">
            Restoration of degraded land: reforestation, wetland restoration,
            and the conversion of croplands to grasslands can all increase
            carbon sequestration.
          </li>
        </ul>

        <p className="text-lg leading-7 text-[#3c3c3c] font-normal font-poppins  mb-8">
          These practices can not only help mitigate climate change by removing
          carbon from the atmosphere, but can also improve soil health and
          fertility, increase crop yields, and provide other environmental
          benefits.
        </p>
        <button className="bg-custom6 text-[#316D69] font-montserrat hover:text-white border-2 border-[#316D69] hover:bg-[#316D69] py-3 px-[25px] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>

      {/* Right Column - Image */}
      <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-3xl transform hover:rotate-2 transition-transform duration-300">
        <img src={img1} alt="Example" className="w-full h-auto" />
      </div>
    </section>
  );
}

export default AgricultureThird;
