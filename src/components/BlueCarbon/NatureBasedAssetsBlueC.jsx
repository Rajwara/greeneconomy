import React from "react";
import Nature from "../../../src/images/nba-bluecarbon.jpg";

const NatureBasedAssetsBlueC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[50px]  py-16 px-[30px] md:px-[60px] font-roboto lg:px-[80px] xl:px-[100px]">
      <div className="container text-left text-white flex flex-col justify-center  h-full">
        <h2 className=" mb-4  font-montserrat text-[#316D69] text-3xl leading-7 font-bold tracking-wide">
          Nature Based <span className="text-[#BAB220]"> Assets</span>
        </h2>
        <p className="text-[#3C3C3C] font-poppins text-lg font-normal leading-7">
          Nature-based assets refer to natural resources and ecosystems, such as
          forests, wetlands, and coral reefs, that provide valuable goods and
          services to human society, such as water filtration, flood control,
          carbon sequestration, and habitat for wildlife.
        </p>
        <p className="text-[#3C3C3C] text-lg font-normal font-poppins leading-7  ">
          These assets can also have economic value and can be managed for
          sustainable use. They are increasingly recognized as important for
          addressing global challenges such as climate change, biodiversity
          loss, and human well-being.
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center h-full ">
        <div className="py-[20px] md:py-[40px] container flex justify-center items-center">
          <img
            className="md:h-[100%] w-full rounded-lg"
            src={Nature}
            alt="deforestation"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default NatureBasedAssetsBlueC;
