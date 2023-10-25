import React from "react";
import HighStandardCarbonBackgroundimg from "../../../src/images/SolutionHighStandardCarbonbg.jpg";

const divStyle1 = {
  backgroundImage: `url(${HighStandardCarbonBackgroundimg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function SolutionHighStandardCarbon() {
  return (
    <div className="relative" style={divStyle1}>
      <div className="mx-auto px-[30px]  md:px-[60px] lg:px-[80px] xl:px-[100px] pt-[30px]  lg:pt-[50px] pb-[30px] xl:pb-[50px] bg-cover bg-center bg-no-repeat  inset-0 bg-[rgba(0,0,0,0.5)]">
        <div className="flex flex-col justify-center items-center h-full overflow-hidden">
          <h2 className="text-[#f7f5f2] text-center text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10 mb-2 md:mb-4 xl:mb-4 font-montserrat font-bold">
            Solution
          </h2>
          <div className="">
            <div className="container">
              <h2 className="text-[#bab220] text-center text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10 mb-2 md:mb-4 xl:mb-6 font-montserrat font-bold ">
                High Standard Carbon Offsets
              </h2>
              <div className="font-poppins text-center text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal text-[#F7F5F2]">
                <p className="">
                  Mitigating climate change and addressing deforestation are
                  crucial challenges in the pursuit of a climate-resilient
                  future. Afforestation or intentional restocking of existing
                  forests has the capacity to diminish the net carbon footprint,
                  hence playing a significant role in combating the
                  ever-increasing threat of global warming. This will also
                  promote carbon sequestration in the biosphere as a way to
                  capture and store carbon dioxide, resulting in the
                  rejuvenation of habitats that have been compromised. All in
                  all, afforestation is a proposition where both the parties
                  benefit from the outcome, safeguarding the future generations'
                  interests.
                </p>
                <p className="mt-2 xl:mt-4">
                  Renewable energy sources are the cornerstone of the global
                  energy transition. Shifting ultimately towards cleaner energy
                  alternatives will reduce the carbon footprint. The Green
                  Economy takes multifaceted approaches that will help safeguard
                  our future by conserving crucial ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionHighStandardCarbon;
