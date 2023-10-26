import React from "react";

const NonTimberForestProducts = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] lg:mt-[50px] mb-[30px] xl:mb-[50px]">
      <div className="nontimber flex flex-col text-center items-center">
        <h2 className="text-[#316D69] text-2xl  mb-2 md:mb-4 xl:mb-6  md:text-3xl xl:text-4xl leading-7 xl:leading-10  font-montserrat font-bold">
          Non-Timber Forest Products
          <span className="text-[#bab220]"> (NTFP)</span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-poppins font-normal  lg:w-4/5">
          Classical forest management models focused on timber production as the
          primary, and sometimes sole, harvestable resource to be acquired.
          However, there is a growing recognition of the value of Non-Timber
          Forest Products (NTFPs) in terms of income diversification and
          fostering sustainable community development. The cultivation of edible
          products has also gained recognition as a valuable component of
          resource management systems, whether these products are intended for
          sale in the market or for local consumption.
        </p>
      </div>
    </div>
  );
};

export default NonTimberForestProducts;
