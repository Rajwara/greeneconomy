import React from "react";
import img1 from "../../../src/images/h1.jpg";
import img2 from "../../../src/images/h2.jpg";
import img3 from "../../../src/images/h3.jpg";

const NatureBaseSolutionSecond = () => {
  return (
    <div className="  pt-20 pb-12 gap-16 overflow-hidden relative lg:flex lg:items-center px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <div className="flex items-center gap-8 ">
        <img src={img1} className="w-1/2 rounded-lg" alt="Tree" />
        <div>
          <img src={img2} className="mb-8 rounded-lg" alt="Tree" />
          <img src={img3} className="rounded-lg" alt="Tree" />
        </div>
      </div>
      <div className="w-full py-12">
        {/* <h2 className="text-2xl font-bold tracking-normal leading-7 text-black font-montserrat dark:text-white lg:text-3xl">
          <span className="text-[#316D69] block">Nature based Assets</span>
        </h2> */}
        <p className="text-lg font-normal mt-4 font-poppins leading-7 text-[#3c3c3c]">
          According to the World Bank, nature-based solutions can provide 37% of
          the mitigation needed until 2030 to meet the goals outlined by the
          Paris Agreement. GEP has an open approach towards climate investments,
          contributing towards the dire need to reach the target of zero
          emissions by 2050. The sustainable forest management (SFM) operators
          and investors seek to develop new income streams from natural forests
          such as carbon, conservation payments and ecotourism. This ensures the
          development of long-term cash flow. The experts work with stakeholders
          from various backgrounds in combating climate change to achieve a
          shared goal, that is, to reduce carbon emissions.{" "}
        </p>

        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-lg shadow">
            <button
              type="button"
              className="py-3 px-[25px] font-montserrat text-lg text-white border-2 border-[#316D69] hover:text-white bg-[#316D69] font-semibold hover:bg-[#BAB220] transition duration-300 rounded-lg"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureBaseSolutionSecond;
