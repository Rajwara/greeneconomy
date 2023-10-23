import React from "react";
import Mangroves1 from "../../../src/images/bluec-tidal-marshes.png";

const TidalMarshes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="flex flex-col justify-center ">
        {" "}
        <h2 className="text-[#BAB220] text-2xl  mb-2 md:mb-4 lg:mb-6  md:text-3xl lg:text-4xl leading-7 lg:leading-10 font-montserrat font-bold">
          Tidal Marshes
        </h2>
        <div className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-5 lg:leading-7  font-poppins font-normal ">
          <p className="">
            These are the areas of low-lying land that are regularly flooded by
            tides. Tidal marshes are ecologically rich environments that serve
            as a habitat for a diverse range of biodiversity. They are
            significant shoreline stabilizers and carbon sinks, thus playing an
            important role in mitigating the effects of sea level rise. Based on
            the 2021 Inventory, coastal wetlands within 48 states stored
            <a
              className="text-[#D3CA28] font-bold underline"
              href="https://www.google.com/url?q=https://www.pewtrusts.org/en/research-and-analysis/issue-briefs/2021/09/coastal-blue-carbon-an-important-tool-for-combating-climate-change&sa=D&source=docs&ust=1697040974264077&usg=AOvVaw3mKHOasdc4n-6KzRSd_OeR"
            >
              {" "}
              4.8 million
            </a>{" "}
            metric tons of carbon dioxide.
          </p>
          <p className=" mt-2 lg:mt-4 ">
            Despite their ecological importance, tidal marshes face a multitude
            of threats that endanger their sustainability. These include climate
            change effects, land use change, pollution, and invasive species.
          </p>
        </div>
      </div>
      <div className="img ">
        <img src={Mangroves1} alt="" className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
};

export default TidalMarshes;
