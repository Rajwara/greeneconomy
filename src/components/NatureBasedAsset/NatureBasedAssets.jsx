import React from "react";
import NatureBasedAssetsimg from "../../../src/images/Nature-Based-Assets-1.png";

const NatureBasedAssets = () => {
  return (
    <div className=" flex flex-row lg:items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] md:mt-[50px] lg:mt-[50px] mt-[30px] mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        <div className="text-sm md:text-base lg:text-lg font-normal mt-4 font-poppins leading-5 lg:leading-7 text-[#3c3c3c]">
          <h2 className="text-2xl md:text-3xl font-bold tracking-normal leading-7 lg:leading-10 mb-2 md:mb-4 lg:mb-6 text-[#3c3c3c] font-montserrat dark:text-[#3c3c3c] lg:text-4xl">
            <span className="text-[#316D69] block">Nature-Based Assets</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg  font-normal  font-poppins leading-5 lg:leading-7 text-[#3c3c3c]">
            The planet Earth is witnessing a planetary crisis unfold in real
            time, and every passing minute demands for a change. When it comes
            to solving the climate crisis one at a time, nature acts as our
            great ally, and it’s about time we recognize its value, and make
            good use of its assets. These assets are all about working with
            nature instead of against it.{" "}
          </p>
          <ol className="text-sm md:text-base lg:text-lg font-poppins list-decimal font-normal leading-5 lg:leading-7 ml-10 mt-2 md:mt-4 lg:mt-4 ">
            <li className="mt-2">Sustainable Forestry</li>
            <li className="mt-2">Blue Carbon</li>
            <li className="mt-2">Climate Smart Agriculture </li>
          </ol>
          <div className="">
            <div className="mt-4 md:mt-4 lg:mt-6 inline-flex rounded-lg shadow">
              <button
                type="button"
                className="py-3 px-[25px] font-montserrat text-sm md:text-base lg:text-lg text-white  hover:text-white bg-[#316D69] font-semibold hover:bg-[#BAB220] transition duration-300 rounded-lg"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center  ">
          <img
            src={NatureBasedAssetsimg}
            className="h-full w-full"
            alt="Tree"
          />
        </div>
      </div>
    </div>
  );
};

export default NatureBasedAssets;
