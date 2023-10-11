import React from "react";
import img1 from "../../../src/images/agriculture-trac.jpg";

function AgricultureForth() {
  return (
    <section className="flex items-center flex-col-reverse lg:flex-row justify-center py-0 lg:py-16 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      {/* Left Column - Image */}
      <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-2xl">
        <img
          src={img1}
          alt="Example"
          className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Column - Heading and Paragraph */}
      <div className="lg:w-1/2 px-8 md:px-10 lg:px-12 my-10 lg:my-0">
        <h2 className=" mb-3 tracking-normal text-[#316D69] font-bold text-3xl leading-7 font-montserrat">
          Why is Agriculture Important
        </h2>
        <ul className="list-disc list-inside leading-7 mb-8 font-poppins">
          <li className="text-[#3c3c3c] font-normal text-lg ">
            It provides food and nourishment to sustain human life and
            populations.
          </li>
          <li className="text-[#3c3c3c] font-normal text-lg ">
            It supports livelihoods and economies, particularly in rural areas.
          </li>
          <li className="text-[#3c3c3c] font-normal text-lg ">
            It contributes to national and global food security.
          </li>
          <li className="text-[#3c3c3c] font-normal text-lg ">
            It plays a significant role in preserving natural resources and
            biodiversity.
          </li>
        </ul>

        <h2 className=" mb-3 text-[#316D69] font-semibold text-xl tracking-normal font-montserrat">
          How Agriculture Important for carbon emissions
        </h2>
        <ul className="list-disc list-inside leading-7 mb-8 font-poppins">
          <li className="text-[#3c3c3c] font-normal text-lg ">
            It can sequester carbon in soil and vegetation through practices
            like conservation tillage and agroforestry.
          </li>
          <li className="text-[#3c3c3c] font-normal text-lg ">
            It can reduce emissions from fertilizer use through efficient
            application and reducing waste.
          </li>
          <li className="text-[#3c3c3c] font-normal text-lg ">
            It can support sustainable land use and management practices that
            mitigate the impact of land use changes on emissions.
          </li>
          <li className="text-[#3c3c3c] font-normal text-lg ">
            A shift towards more plant-based diets can reduce emissions
            associated with livestock production.
          </li>
          <li className="text-[#3c3c3c] font-normal text-lg ">
            It can contribute to the development of low-carbon, sustainable food
            systems.
          </li>
        </ul>

        <button className="mt-6 bg-custom6 text-[#316D69] font-montserrat hover:text-white border-2 border-[#316D69] hover:bg-[#316D69] py-3 px-[25px] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default AgricultureForth;
