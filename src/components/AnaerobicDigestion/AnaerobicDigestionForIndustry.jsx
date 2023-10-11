import React from "react";
import indurtry from "../../../src/images/Anaerobic-Digestion-at-a-Glance.png";

function AnaerobicDigestionForIndustry() {
  return (
    <div className=" bg-[#f7f5f2] flex justify-center gap-8  flex-col md:flex-row px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] p-5 md:p-20 mt-[50px]">
      {/* Left Column - Headings */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 ">
        <h2 className="text-[#BAB220] text-xl mb-4 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          Anaerobic Digestion For{" "}
          <span className="text-[#316D69]">Industry</span>
        </h2>
        <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7  font-poppins font-normal">
          Anaerobic digestion when used in conjunction with other advanced
          technologies, optimized resources effectively. It delivers valuable
          benefits for both private and public sectors alike
        </p>
        <img src={indurtry} alt="" className="w-full h-[300px] mt-4" />
      </div>

      {/* Right Column - Paragraphs */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
        <div>
          <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-4">
            For Private Sectors:
          </h6>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 font-poppins font-normal">
            For private sectors such as manufacturing companies, it leads to
            enhanced sustainability, cost savings, improved resource
            utilization, and bolstering of their brand image.
          </p>
        </div>
        <div>
          <h6 className="uppercase text-lg text-[#316D69] font-bold	font-montserrat mb-4 mt-4">
            For Public Sectors:
          </h6>
          <p className="text-[#3c3c3c] text-sm md:text-base lg:text-lg leading-7 font-poppins font-normal">
            Anaerobic digestion offers a sustainable waste management solution
            that lowers greenhouse gas emissions, promotes environmental
            stewardship, and reduces landfill reliance, leading to healthier
            communities.
          </p>
        </div>
        <p className="text-[#3c3c3c] text-lg leading-7 tracking-normal font-poppins font-normal mt-4">
          Thus, the adoption of anaerobic digestion aligns with environmental
          and economic interests, serving the goals and objectives of both
          sectors alike.
        </p>
      </div>
    </div>
  );
}

export default AnaerobicDigestionForIndustry;
