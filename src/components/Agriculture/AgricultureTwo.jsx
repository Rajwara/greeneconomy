import React from "react";
import img1 from "../../../src/images/agriculture-significance.png";

function AgricultureTwo() {
  return (
    <section className="flex items-center bg-[#f7f5f2] flex-col-reverse lg:flex-row justify-center py-0 lg:py-16 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      {/* Left Column - Image */}
      <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-2xl">
        <img
          src={img1}
          alt="Example"
          className="w-full h-full transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Column - Heading and Paragraph */}
      <div className="lg:w-1/2 px-8 md:px-10 lg:px-12 my-10 lg:my-0">
        <h2 className=" mb-8 text-[#316D69] font-bold text-2xl md:text-3xl lg:text-4xl leading-10 font-montserrat">
          The Significance of{" "}
          <span className="text-[#bab220]">Agriculture</span>
        </h2>
        <p className="font-normal text-[#3c3c3c] font-poppins leading-7 text-sm md:text-base lg:text-lg mb-4">
          Agriculture holds pivotal importance for various reasons:
        </p>
        <ul className="list-none list-inside text-[#3c3c3c] font-normal text-sm md:text-base lg:text-lg leading-7 mb-8 font-poppins">
          <li className=" mt-2">
            <span className="text-[#bab220] font-bold">1. Food Security: </span>
            It provides essential sustenance to nourish human life and sustain
            populations.
          </li>
          <li className="mt-2 ">
            <span className="text-[#bab220] font-bold">
              2. Economic Support:{" "}
            </span>
            Agriculture is a cornerstone of livelihoods and economies,
            particularly in rural regions.
          </li>
          <li className=" mt-2">
            <span className="text-[#bab220] font-bold">
              3. Environmental Conservation:
            </span>{" "}
            It actively participates in the preservation of natural resources
            and biodiversity.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AgricultureTwo;
