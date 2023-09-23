import React from "react";
import banner from "../../../src/images/f2.jpg";

const ForestryBanner = () => {
  return (
    <div className="relative h-80 overflow-hidden flex items-center justify-center">
      <img
        src={banner}
        className="absolute object-cover w-full h-full"
        alt="Background"
      />

      <div className="relative z-10 flex flex-col items-center justify-between w-full">
        <h1 className="flex flex-col items-center text-6xl font-extrabold text-center text-white md:text-8xl">
          State of Green-Economy
        </h1>
        <a
          href="#"
          className="inline-flex items-center rounded-lg justify-center px-[25px] py-3 mt-6 text-white bg-transparent rounded-full font-semibold hover:border-green-600 transition duration-300 border-2 border-white"
        >
          Plant a Tree
        </a>
      </div>
    </div>
  );
};

export default ForestryBanner;
