import React from "react";
import img1 from "../../../src/images/h1.jpg";
import img2 from "../../../src/images/h2.jpg";
import img3 from "../../../src/images/h3.jpg";

const TwoMainStrategiesExplore = () => {
  return (
    <div className=" flex flex-col dark:bg-gray-800 overflow-hidden mb-14 px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  relative lg:flex lg:items-center">
      <div className=" py-20 ">
        <h2 className=" text-3xl font-bold text-center tracking-normal leading-7 lg:text-4xl font-montserrat text-[#316D69] dark:text-white">
          <span className="text-[#bab220]">Two Main </span>
          Strategies
        </h2>
      </div>
      <div className=" flex align-middle justify-center gap-8">
        <div className=" grid-cols-6 w-full py-12  ">
          <h2 className="text-3xl font-bold text-[#316D69] font-montserrat tracking-normal leading-7 dark:text-white sm:text-4xl">
            <span className="block">Syntrophic Agroforestry</span>
          </h2>
          <p className="text-lg mt-4 text-[#3c3c3c] font-normal font-poppins leading-7">
            Syntropic farming* is an intensive form of agroforestry that
            imitates the nature, in order to provide yields at all stages of
            succession, generate its own fertility, and with the goal of
            creating a productive forest that mimics the structure and function
            of the native forests.
            <br />
            <br />
            The system become autonomous from any chemical inputs (fertilizer,
            pesticides, weed control). It just requires strategic pruning.{" "}
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-lg shadow">
              <button
                type="button"
                className="py-3 px-[25px] font-montserrat  text-white hover:text-white bg-[#316D69] font-semibold hover:bg-[#BAB220] transition duration-300 rounded-lg"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="flex  grid-cols-6 items-center gap-8 ">
          <img src={img1} className="w-1/2 rounded-lg" alt="Tree" />
          <div>
            <img src={img2} className="mb-8 rounded-lg" alt="Tree" />
            <img src={img3} className="rounded-lg" alt="Tree" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoMainStrategiesExplore;
