import React from "react";
import GraphForHome from "./GraphForHome";
import graphimage from "../../images/Graph1.png";

const FlowChart = () => {
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mt-[30px] lg:mt-[50px] mb-[30px] xl:mb-[50px]  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] items-center">
        <div className="hidden md:hidden lg:block xl:block">
          <img src={graphimage} alt="" className="h-full w-full rounded-lg"/>
        </div>

        <div className="flex flex-col flex-wrap">
          <div className="text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10 font-montserrat font-bold">
            <h2 className="   text-[#316D69] border-neutral-950	mb-2 md:mb-4 xl:mb-6 ">
              Emission Giants
            </h2>
          </div>

          <div className="text-sm md:text-base xl:text-lg text-[#3c3c3c] leading-5 xl:leading-7 font-normal font-poppins">
            <p className="">
              According to the{" "}
              <a
                className="text-[#D3CA28] font-bold underline "
                href="https://www.un.org/en/"
              >
                United Nations
              </a>
              , the seven biggest emitters of greenhouse gasses are the United
              States of America, India, China, Indonesia, the European Union,
              Russian Federation, and Brazil. In
              <a
                href="https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data"
                className="text-[#D3CA28] font-bold underline ml-1"
              >
                2020,
              </a>{" "}
              they accounted for half of the global greenhouse gas emissions.
            </p>
            <p className="mt-2 xl:mt-4">
              The rest of the countries including Argentina, the Republic of
              Korea, Mexico, Saudi Arabia, South Africa, Turkey, the United
              Kingdom, Australia, Canada, France, Germany, Italy, Japan are
              responsible for
              <a
                className="text-[#D3CA28] font-bold underline mx-1"
                href="https://www.wri.org/insights/4-charts-explain-greenhouse-gas-emissions-countries-and-sectors#:~:text=China%20is%20the%20biggest%20emitter,the%20European%20Union%20at%207.03%25."
              >
                75%
              </a>{" "}
              of the global greenhouse gas emissions
            </p>
          </div>
        </div>
        <div className="lg:hidden xl:hidden">
          <img src={graphimage} alt="" className="h-full w-full rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
