import React from "react";
import NatureBasedAssetsimg from "../../../src/images/Why-Partner-With.png";

const WhyPartnerWithGep = () => {
  return (
    <div className=" flex flex-row  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] lg:mt-[50px] pb-[30px] xl:pb-[50px]">
      <div className="grid grid-cols-1 md:gris-cols-1 lg:grid-cols-2 xl:grid-cols-2  items-center">
        <div className="flex flex-col mr-0 md:mr-0 lg:mr-[50px] xl:mr-[50px] justify-center">
          <h2 className="text-2xl md:text-3xl font-bold  leading-7 xl:leading-10 text-[#3c3c3c] font-montserrat dark:text-white mb-2 md:mb-4 xl:mb-6 xl:text-4xl">
            <span className="text-[#316D69]">Why Partner With</span> GEP?
          </h2>
          <p className="text-sm md:text-base xl:text-lg  font-normal  font-poppins leading-5 xl:leading-7 text-[#3c3c3c]">
            Integrating carbon solutions into your business model presents a{" "}
            <span className="font-extrabold">complimentary revenue system</span>{" "}
            that allows you to have a positive impact on the planet while
            highlighting key advantages. Firstly, it provides
            <span className="font-extrabold">
              {" "}
              additional value to your clients,
            </span>{" "}
            helping them gain a competitive advantage by fulfilling their
            environmental responsibilities, particularly in sectors where few
            companies offer carbon opportunities to farmers, positioning you as
            a pioneer. Secondly, this strategic move can help{" "}
            <span className="font-extrabold">grow your market share</span> by
            attracting eco-conscious clients who value sustainability. By
            aligning carbon solutions with your existing offerings, you open up
            new revenue streams for sustainable growth.
          </p>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col mt-2 md:mt-4 xl:mt-4">
              <h6 className="uppercase text-sm md:text-base xl:text-lg  leading-7 xl:leading-9 text-[#316D69] font-bold	font-montserrat">
                What Do We Offer?
              </h6>
              <ol className="text-sm md:text-base xl:text-lg font-normal font-poppins list-decimal ml-10 mt-2  leading-5 xl:leading-7 text-[#3c3c3c]">
                <li className="mt-2">Carbon Offset Projects</li>
                <li className="mt-2">Expertise And Support </li>
                <li className="mt-2">Competitive Edge </li>
              </ol>
            </div>
          </div>
        </div>
        <div className=" items-center gap-8  mt-6 md:mt-0 lg:mt-0">
          <img
            src={NatureBasedAssetsimg}
            className="w-full h-full lg:h-[450px] xl:h-[500px] rounded-lg"
            alt="Tree"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyPartnerWithGep;
