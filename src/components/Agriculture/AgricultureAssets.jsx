import React from "react";
import img1 from "../../../src/images/Family-farm.jpeg";

function AgricultureAssets() {
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
        <h2 className=" mb-6 tracking-normal text-[#316D69] leading-7 font-bold text-3xl font-montserrat">
          Nature<span className="text-[#BAB220]"> Based Assets</span>
        </h2>
        <p className="text-lg text-[#3c3c3c] font-normal leading-7 font-poppins">
          Nature-based assets refer to natural resources and ecosystems, such as
          forests, wetlands, and coral reefs, that provide valuable goods and
          services to human society, such as water filtration, flood control,
          carbon sequestration, and habitat for wildlife
          <br />
          These assets can also have economic value and can be managed for
          sustainable use. They are increasingly recognized as important for
          addressing global challenges such as climate change, biodiversity
          loss, and human well-being.
        </p>
        <button className="mt-6 bg-custom6 hover:bg-[#316D69] border-2 border-[#316D69] hover:text-white text-[#316D69] py-3 px-[25px] rounded-lg shadow-md transition duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default AgricultureAssets;
