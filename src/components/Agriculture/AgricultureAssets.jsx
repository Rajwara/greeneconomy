import React from "react";
import img1 from "../../../src/images/Family-farm.jpeg";

function AgricultureAssets() {
  return (
    <section className="flex items-center flex-col-reverse lg:flex-row justify-center mt-[100px] mb-[50px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      {/* Left Column - Image */}
      <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-2xl">
        <img
          src={img1}
          alt="Example"
          className="w-full h-[350px] transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Column - Heading and Paragraph */}
      <div className="lg:w-1/2 px-8 md:px-10 lg:px-12 my-10 lg:my-0">
        <h2 className=" mb-6 tracking-normal text-[#316D69] leading-7 font-bold text-3xl font-montserrat">
          Nature-Based Assets and{" "}
          <span className="text-[#BAB220]"> Agriculture</span>
        </h2>
        <p className="text-lg text-[#3c3c3c] font-normal leading-7 font-poppins">
          Nature-based assets play a vital role in agriculture, acting as a
          critical component in fostering sustainable and environmentally
          responsible practices in the sector.
        </p>
        <p className="text-lg text-[#3c3c3c] font-normal leading-7 font-poppins mt-4">
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
