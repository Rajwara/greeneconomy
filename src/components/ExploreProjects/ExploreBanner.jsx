import React from "react";
import banner from "../../../src/images/f2.jpg";

const ExploreBanner = () => {
  return (
    <div className="relative h-80 overflow-hidden flex items-center justify-center">
      <img
        src={banner}
        className="absolute object-cover w-full h-full"
        alt="Background"
      />

      <div className="relative z-10 flex flex-col items-center justify-between w-full">
        <h1 className="flex flex-col items-center text-6xl font-extrabold text-center text-white md:text-8xl">
          Forest Carbon Offsets:
          <br />
          Too Good to be True?
        </h1>
      </div>
    </div>
  );
};

export default ExploreBanner;
