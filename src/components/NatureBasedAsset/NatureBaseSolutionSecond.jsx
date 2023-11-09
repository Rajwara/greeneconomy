import React from "react";
import { Link } from "react-router-dom";
import NatureBasedAssets2 from "../../../src/images/Nature-Based-Assets-2.png";

const NatureBaseSolutionSecond = () => {
  return (
    <div className=" flex flex-row lg:items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] lg:mt-[50px] mt-[30px] mb-[30px] xl:mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="  hidden md:hidden lg:block xl:block">
          <img src={NatureBasedAssets2} className="h-full w-full" alt="Tree" />
        </div>
        <div className="text-sm md:text-base xl:text-lg font-normal mt-4 font-poppins leading-5 xl:leading-7 text-[#3c3c3c]">
          <p className="">
            According to the World Bank, nature-based solutions can provide{" "}
            <a
              className="text-[#D3CA28] font-bold underline"
              href="https://www.worldbank.org/en/news/feature/2022/05/19/what-you-need-to-know-about-nature-based-solutions-to-climate-change"
            >
              37% of the mitigation
            </a>{" "}
            needed until 2030 to meet the goals outlined by the Paris Agreement.
            GEP has an open approach towards climate investments, contributing
            towards the dire need to reach the target of zero emissions by 2050.
          </p>
          <p className="mt-2 xl:mt-4">
            {" "}
            The Sustainable Forest Management (SFM) operators and investors seek
            to develop new income streams from natural forests such as carbon,
            conservation payments and ecotourism. This ensures the development
            of long-term cash flow. The experts work with stakeholders from
            various backgrounds in combating climate change to achieve a shared
            goal, that is, to reduce carbon emissions.{" "}
          </p>

          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-4 md:mt-4 xl:mt-6 inline-flex rounded-lg shadow">
              <Link to="/contact-us">
                <button
                  type="button"
                  className="py-3 px-[25px] font-montserrat text-sm md:text-base xl:text-lg text-white  hover:text-white bg-[#316D69] font-semibold hover:bg-[#BAB220] transition duration-300 rounded-lg"
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-6 lg:mt-0  lg:hidden xl:hidden">
          <img src={NatureBasedAssets2} className="h-full w-full" alt="Tree" />
        </div>
      </div>
    </div>
  );
};

export default NatureBaseSolutionSecond;
