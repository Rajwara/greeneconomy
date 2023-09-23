import React from "react";
import HighStandardCarbonBackgroundimg from '../../../src/images/HighStandardCarbonBackgroundimg.jpg'
const divStyle1 = {
  backgroundImage: `url(${HighStandardCarbonBackgroundimg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

function SolutionHighStandardCarbon() {
  return (
    <div className="relative" style = {divStyle1}>
      <div className="mx-auto px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] bg-cover bg-center bg-no-repeat bg-[black] bg-opacity-50"  >
      <div className="flex flex-col justify-center items-center h-full overflow-hidden xs:py-[20px] lg:py-[50px]">
        <h6 className="uppercase text-lg text-[#F7F5F2] font-bold	font-montserrat">
          Solution
        </h6>
        <div className="">
          <div className=" container ">
            <h2 className="text-[#BAB220] text-center text-4xl mb-6 font-montserrat  font-bold pb-6]">
              High Standard Carbon Offsets
            </h2>
         <div className="font-poppins text-center text-lg text-[#F7F5F2]">
         <p className=" ">
              Afforestation, the practice of planting trees to restore forests,
              has been a key climate change solution for many years. Sustainable
              afforestation projects can reduce the net zero carbon footprint
              and help combat global warming. By sequestering carbon dioxide,
              these efforts also promote biodiversity in their local area and
              revive ecosystems that have been degraded or destroyed.
              Afforestation offers a win-win situation with its capacity to
              reduce high-level carbon emissions while providing sustainable
              solutions for future generations.
            </p>
            <p className="mt-2">
              The use of high standard carbon offsets for afforestation
              activities is an important approach to creating positive
              ecological outcomes and ensuring lasting change against climate
              change.
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
