import React from "react";
import banner from "../../../src/images/forestassets-forestry.png";

const ForestAssets = () => {
  return (
    <div className="   text-[#3C3C3C] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  justify-center items-center gap-8">
        <div className="">
          <img
            src={banner}
            alt="About Green Economy"
            className="rounded-lg h-full w-full"
          />
        </div>
        <div className="">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  text-[#316D69] leading-10 font-montserrat font-bold mb-8">
            Forest Assets
          </h2>
          <div className="mb-6 text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 font-normal font-poppins">
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
          <ul className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 font-normal font-poppins list-disc">
            <li className="ml-8 mb-2">
              Timber and non-timber forest products (NTFPs)
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
          <div className="mb-3 text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 font-normal ">
            <a href="/forest-assets">
              <button className="capitalize bg-[#BAB220] mt-6 w-[170px] text-[#F7F5F2] px-6 py-2 rounded font-montserrat text-sm md:text-base lg:text-lg hover:bg-[#EFEDD1] hover:text-[#316D69]	">
                Learn More...
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestAssets;
