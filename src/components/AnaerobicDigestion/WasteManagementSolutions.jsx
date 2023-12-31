import React from "react";

const WasteManagementSolutions = () => {
  return (
    <div className="px-[30px] mb-[30px] xl:mb-[50px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[0px] lg:mt-[0px] flex flex-col text-center justify-center items-center">
      <h2 className="text-2xl md:text-3xl xl:text-4xl text-[#316D69] leading-7 xl:leading-10 font-montserrat font-bold  mb-2 md:mb-4 xl:mb-6 ">
        Waste Management <span className="text-[#bab220]">Solution</span>
      </h2>
      <div className="mb-3 text-[#3c3c3c] text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal font-poppins lg:w-4/5">
        <p className=" ">
          In recent years, there has been significant progress in waste
          management solutions, with a growing focus on sustainability and
          efficiency. Among the innovative approaches, anaerobic digestion has
          become the most famous one. This process operates in an oxygen-free
          environment to produce biogas that is then used as an energy source.
        </p>
        <p className="mt-2 xl:mt-4">
          It offers a sustainable avenue for clean energy production. Anaerobic
          digestion has the potential for even more applications due to its
          ability to break down organic matter in an efficient way. This
          sustainable process has the ability to reduce gas emissions which is
          equivalent to{" "}
          <a
            href="https://www.google.com/url?q=https://www.europeanbiogas.eu/new-study-shows-that-anaerobic-digestion-has-the-potential-to-reduce-global-ghg-emissions-with-10-13/%23:~:text%3DNews-,Anaerobic%2520digestion%2520has%2520the%2520potential%2520to%2520reduce%2520global%2520GHG%2520emissions,the%2520Global%2520Potential%2520of%2520Biogas.&sa=D&source=docs&ust=1697020346672045&usg=AOvVaw2Oel6vYN3l3oVqv_WJE47l"
            className="text-[#D3CA28] font-bold underline mr-1"
          >
            10%-13%
          </a>
          of the world’s current greenhouse gas emissions.
        </p>
      </div>
    </div>
  );
};

export default WasteManagementSolutions;
