import React from "react";
import quote_upper_column from "../../../src/images/quote_upper_column.svg";
import quote_lower_column from "../../../src/images/quote_lower_column.svg";

const UnSecretaryQuote = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] pt-[30px] lg:pt-[50px] pb-[30px] xl:pb-[50px]">
      <h6 className="uppercase text-sm md:text-base xl:text-lg text-[#BAB220] font-bold leading-7 xl:leading-9	font-montserrat">
        The UN Secretary General further added to this in the following words :
      </h6>

      <div className="mt-[30px] lg:mt-[50px]  bg-[#316D69] hover:bg-[#3c3c3c] p-10 text-center lg:w-[80%] mx-auto rounded-3xl">
        <img
          src={quote_upper_column}
          className="w-12 md:w-16 lg:w-16 xl:w-20 h-12 md:h-16 lg:h-16 xl:h-20 mb-4 "
          alt=""
        />
        <p className="font-poppins text-sm md:text-base xl:text-lg font-normal leading-5 xl:leading-7 text-[#f7f5f2]">
          An ambitious and effective post-2020 global biodiversity framework,
          with clear targets and benchmarks, can put nature and people back on
          track. This framework should work in synergy with the Paris Agreement
          on climate change and other multilateral agreements on forests,
          desertification and oceans.
        </p>
        <div className="  justify-end flex">
          <img
            src={quote_lower_column}
            className="w-12 md:w-16 lg:w-16 xl:w-20 h-12 md:h-16 lg:h-16 xl:h-20  mt-4 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UnSecretaryQuote;
