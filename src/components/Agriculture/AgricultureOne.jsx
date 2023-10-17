import React from "react";
import img1 from "../../../src/images/what-is-agriculture.png";

function AgricultureOne() {
  return (
    <section className="flex items-center flex-col gap-8 lg:flex-row justify-center mt-[100px] mb-[50px]  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      {/* Left Column - Heading and Paragraph */}
      <div className="lg:w-1/2  my-10 lg:my-0">
        <h2 className=" mb-8 text-[#316D69] leading-10 font-bold text-2xl md:text-3xl lg:text-4xl font-montserrat">
          What is <span className="text-[#bab220]">Agriculture</span>
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-[#3c3c3c] font-normal font-poppins leading-7 mb-6">
          Agriculture contributes to carbon sequestration, the process of
          extracting carbon dioxide from the atmosphere and storing it in the
          soil and vegetation. This can be achieved through various methods,
          including:
        </p>
        <ul className=" list-inside gap-4 font-poppins  text-[#3c3c3c] font-normal text-sm md:text-base lg:text-lg leading-7 mb-6 ml-4">
          <li className="mt-2 ">
            <span className="text-[#316D69] font-bold ">
              {" "}
              1. Conservation Tillage:
            </span>{" "}
            <br />
            Minimizing soil disturbance to enhance organic matter in the soil
            and encourage carbon sequestration.
          </li>
          <li className="mt-2">
            <span className="text-[#316D69] font-bold">2. Cover Cropping:</span>{" "}
            <br /> Planting crops such as legumes that safeguard the soil and
            support carbon sequestration.
          </li>
          <li className="mt-2 ">
            <span className="text-[#316D69] font-bold">3. Crop Rotation:</span>{" "}
            <br /> Alternating between different crop types to boost carbon
            storage in the soil.
          </li>
          <li className="mt-2">
            <span className="text-[#316D69] font-bold">
              4. Land Rrestoration:
            </span>
            <br /> Rejuvenating degraded land through reforestation, wetland
            restoration, and transforming croplands into grasslands, all of
            which can increase carbon sequestration.
          </li>
        </ul>

        <p className="text-sm md:text-base lg:text-lg leading-7 text-[#3c3c3c] font-normal font-poppins  mb-6">
          These practices not only aid in mitigating climate change by removing
          carbon from the atmosphere but also enhance soil health and fertility,
          elevate crop yields, and offer additional environmental benefits.
        </p>
      </div>

      {/* Right Column - Image */}
      <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-3xl transform hover:rotate-2 transition-transform duration-300">
        <img src={img1} alt="Example" className="w-full h-full" />
      </div>
    </section>
  );
}

export default AgricultureOne;
