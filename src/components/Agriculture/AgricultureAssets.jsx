import React from "react";
import img1 from "../../../src/images/agriculture-nature-based-assets.png";

function AgricultureAssets() {
  return (
    <section className="flex items-center flex-col-reverse lg:flex-row justify-center mt-[0px] md:mt-[50px] lg:mt-[100px] mb-[100px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      {/* Left Column - Image */}
      <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-2xl">
        <img
          src={img1}
          alt="Example"
          className="w-full h-full transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Column - Heading and Paragraph */}
      <div className="lg:w-1/2  lg:px-12 my-10 lg:my-0">
        <h2 className=" mb-4 md:mb-6 lg:mb-8  text-[#316D69] leading-7 lg:leading-10 font-bold text-2xl md:text-3xl lg:text-4xl font-montserrat">
          Nature-Based Assets and{" "}
          <span className="text-[#BAB220]"> Agriculture</span>
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-[#3c3c3c] font-normal leading-5 lg:leading-7 font-poppins">
          Nature-based assets play a vital role in agriculture, acting as a
          critical component in fostering sustainable and environmentally
          responsible practices in the sector.
        </p>
        <p className="text-sm md:text-base lg:text-lg text-[#3c3c3c] font-normal leading-5 lg:leading-7 font-poppins mt-4">
          {" "}
          These assets refer to the natural resources essential for agriculture,
          and include elements like fertile soil, clean water resources, and
          topography of the land. They are fundamental to the success and
          sustainability of agriculture.
        </p>
      </div>
    </section>
  );
}

export default AgricultureAssets;
