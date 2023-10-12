import React from "react";

const NonTimberForestProducts = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[50px] mb-[50px]">
      <div className="nontimber flex flex-col text-center items-center">
        <h2 className="text-[#316D69] text-xl mb-4 md:text-2xl lg:text-4xl leading-7 mt-4 tracking-normal font-montserrat font-bold">
          Non-Timber Forest Products
          <span className="text-[#bab220]"> (NTFP)</span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 mt-4 font-poppins font-normal w-4/5">
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
