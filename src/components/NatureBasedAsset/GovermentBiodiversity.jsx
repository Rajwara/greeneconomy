import React from "react";

const GovermentBiodiversity = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mb-[50px] mt-[30px] md:mt-[50px] lg:mt-[50px]">
      <h2 className="text-2xl ma:text-3xl lg:text-4xl mb-2 md:mb-4 lg:mb-6 font-montserrat leading-7 lg:leading-10  font-bold text-[#316D69]">
        How Governments Are Dealing With Climate Change and Biodiversity?
      </h2>
      <div className=" text-sm md:text-base lg:text-lg font-normal font-poppins leading-5 lg:leading-7 text-[#3c3c3c]">
        <p className="mt-2 lg:mt-4 ">
          Climate change and biodiversity are part of an interlinked triple
          planetary crisis; the UN is therefore, tackling with them together
          through:
        </p>
        <ol className="mt-2 lg:mt-4 list-disc pl-8">
          <a
            className="text-[#D3CA28] font-bold underline"
            href="https://unfccc.int/"
          >
            {" "}
            <li>UN Framework Convention on Climate Change (UNFCCC)</li>{" "}
          </a>
          <a
            className="text-[#D3CA28] font-bold underline"
            href="a.	https://www.un.org/en/observances/biological-diversity-day/convention#:~:text=The%20Convention%20on%20Biological%20Diversity,been%20ratified%20by%20196%20nations."
          >
            <li>UN Convention on Biological Diversity </li>
          </a>
        </ol>
      </div>
    </div>
  );
};

export default GovermentBiodiversity;
