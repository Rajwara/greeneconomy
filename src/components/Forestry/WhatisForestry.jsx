import React from "react";

const WhatisForestry = () => {
  return (
    <div className="flex justify-center gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mb-[30px] xl:mb-[50px]">
      <div className="flex flex-col text-center items-center ">
        {" "}
        <h2 className="text-[#316D69] text-2xl md:text-3xl mb-2 md:mb-4 xl:mb-6 xl:text-4xl leading-7 xl:leading-10  font-montserrat font-bold">
          Agroforestry
        </h2>
        <div className="text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7  font-poppins font-normal  lg:w-4/5">
          <p className="">
            Forestry is the art of nurturing our natural treasures; forests and
            their diverse resources from trees, and wildlife to the very soil
            beneath our feet. This multi-faceted discipline contains activities
            like harvesting, planting, and safeguarding forests, with a main
            focus on conserving biodiversity, and the ecosystem. Managing
            forests for various purposes including recreational havens, wildlife
            sanctuaries, and timber production underscores the versatility of
            forestry.
          </p>
          <p className="mt-2 xl:mt-4">
            Sustainable forestry harmonizes the needs of ecosystems,
            communities, and wildlife, preserving the forests for future
            generations and protecting the benefits they provide, such as water
            regulation, carbon sequestration, and habitat for wildlife.
            Sustainable forestry practices can offset nearly
            <a
              className="text-[#D3CA28] font-bold underline mx-1"
              href="https://www.google.com/url?q=https://www.ncsl.org/environment-and-natural-resources/the-role-of-forests-in-carbon-sequestration-and-storage%23:~:text%3DThe%2520U.S.%2520Forest%2520Service%2520reports,%252D%2520or%2520diesel%252Dfueled%2520vehicles.&sa=D&source=docs&ust=1697052120484945&usg=AOvVaw18jVQHFFM--S3jNeWesuRk"
            >
              {" "}
              16%
            </a>{" "}
            of domestic carbon dioxide emissions by storing 866 million metric
            tons of CO2 per year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatisForestry;
