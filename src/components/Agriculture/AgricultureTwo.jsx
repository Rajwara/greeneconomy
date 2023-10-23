import React from "react";
import img1 from "../../../src/images/agriculture-significance.png";

function AgricultureTwo() {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-[50px] ">
        <div className="">
          <img className="h-full w-full rounded-lg" src={img1} alt=""></img>
        </div>
        <div className=" text-white  flex flex-col justify-center  ">
          <h2 className="  mb-2 md:mb-4 lg:mb-6  text-[#316D69] font-bold text-2xl md:text-3xl lg:text-4xl leading-7 lg:leading-10 font-montserrat">
            The Significance of{" "}
            <span className="text-[#bab220]">Agriculture</span>{" "}
          </h2>{" "}
          <p className="font-normal text-[#3c3c3c] font-poppins leading-5 lg:leading-7 text-sm md:text-base lg:text-lg mb-2 lg:mb-4">
            Agriculture holds pivotal importance for various reasons:{" "}
          </p>{" "}
          <ul className="list-none list-inside text-[#3c3c3c] font-normal text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins">
            {" "}
            <li className="  mb-2 md:mb-4 lg:mb-4">
              {" "}
              <span className="text-[#bab220] font-bold">
                1. Food Security:{" "}
              </span>
              It provides essential sustenance to nourish human life and sustain
              populations.{" "}
            </li>{" "}
            <li className="mt-2 mb-2 md:mb-4 lg:mb-4">
              {" "}
              <span className="text-[#bab220] font-bold">
                2. Economic Support:{" "}
              </span>
              Agriculture is a cornerstone of livelihoods and economies,
              particularly in rural regions.{" "}
            </li>{" "}
            <li className=" mt-2 ">
              {" "}
              <span className="text-[#bab220] font-bold">
                3. Environmental Conservation:{" "}
              </span>{" "}
              It actively participates in the preservation of natural resources
              and biodiversity.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AgricultureTwo;
