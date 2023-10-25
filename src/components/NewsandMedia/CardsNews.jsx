import React from "react";
import mou from "../../../src/images/media-thumb-1.jpg";
import uae from "../../../src/images/media-thumb-2.jpg";

const CardsNews = () => {
  return (
    <div className="mx-auto px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mb-[100px] ">
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 xl:w-[60%] xl:h-[80%] justify-center items-center m-auto">
        <a href="/mou-uganda">
          <div className="inner-card flex flex-col text-center items-center hover:shadow-lg hover:shadow-[#316D69] p-8  rounded-lg">
            <img src={mou} alt="cards-images" className="h-[80%] w-[100%] " />
            <h6 className="uppercase text-sm md:text-base xl:text-lg text-[#316D69] h-[40px] md:h-[20px] lg:h-[20px] xl:h-[20px] font-bold leading-7 xl:leading-9	font-montserrat mt-4">
              MoU Ceremony
            </h6>
            <p className="text-sm md:text-base xl:text-lg leading-5 xl:leading-7 text-[#3c3c3c] h-[40px] font-normal font-poppins mt-2">
              Between GEP and Uganda Government
            </p>
          </div>
        </a>
        <a href="/uae-project">
          <div className="inner-card flex flex-col text-center items-center hover:shadow-lg hover:shadow-[#316D69] p-8  rounded-lg">
            <img src={uae} alt="cards-images" className="h-[80%] w-[100%] " />
            <h6 className="uppercase text-sm md:text-base xl:text-lg text-[#316D69] h-[40px] md:h-[20px] lg:h-[20px] xl:h-[20px] font-bold leading-7 xl:leading-9	font-montserrat mt-4">
              UAE project developers
            </h6>
            <p className="text-sm md:text-base xl:text-lg leading-5 xl:leading-7 text-[#3c3c3c] h-[40px] font-normal font-poppins mt-2">
              Gear up for expansion pitch ahead of COP28
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CardsNews;
