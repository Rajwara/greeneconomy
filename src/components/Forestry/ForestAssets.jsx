import React from "react";
import banner from "../../../src/images/forestassets-forestry.png";

const ForestAssets = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] lg:mt-[50px] mb-[30px] xl:mb-[50px]">
      <div className="img hidden md:hidden lg:block xl:block">
        <img src={banner} alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="flex flex-col  ">
        {" "}
        <h2 className="text-2xl md:text-3xl xl:text-4xl  text-[#316D69] leading-7 xl:leading-10 font-montserrat font-bold mb-2 md:mb-4 xl:mb-6">
          Forest Assets
        </h2>
        <div className="mb-4 xl:mb-6 text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal font-poppins">
          <p className=" ">
            Forests cover{" "}
            <a
              href="https://earthobservatory.nasa.gov/features/ForestCarbon#:~:text=Forests%20are%20considered%20one%20of,50%20percent%20of%20plant%20productivity."
              className="text-[#D3CA28] font-bold underline"
            >
              30%{" "}
            </a>
            of the earth’s land, and the forest assets refer to the values,
            benefits, and resources derived from forests including:
          </p>
        </div>
        <ul className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal font-poppins list-disc">
          <li className="ml-8 mb-2">
            Timber and Non-Timber Forest Products (NTFPs)
          </li>
          <li className="ml-8 mb-2">
            Ecosystem services such as carbon sequestration, water management,
            and soil preservation
          </li>
          <li className="ml-8 mb-2">Biodiversity and wildlife habitat </li>
          <li className="ml-8 mb-2">
            Recreational prospects and tourism attractions
          </li>
          <li className="ml-8 mb-2">Cultural and spiritual values </li>
        </ul>
        <div className="mb-3 text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal ">
          <a href="/forest-assets">
            <button className="capitalize bg-[#BAB220] mt-4 xl:mt-6 w-[170px] text-[#F7F5F2] px-6 py-2 rounded font-montserrat text-sm md:text-base xl:text-lg hover:bg-[#EFEDD1] hover:text-[#316D69]	">
              Learn More...
            </button>
          </a>
        </div>
      </div>
      <div className="img mt-2 md:mt-2 lg:mt-0 lg:hidden xl:hidden">
        <img src={banner} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default ForestAssets;
