import React from "react";
import Powerof1 from "../../../src/images/wasolar-our-commitement.png";

const OurCommitment = () => {
  return (
    <div className="px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]  mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 lg:gap-x-[50px] ">
        <div className=" text-white  flex flex-col justify-center  ">
          <h2 className=" text-2xl md:text-3xl font-bold  mb-2 md:mb-4 lg:mb-6   font-montserrat text-[#3c3c3c] dark:text-[#3c3c3c] lg:text-4xl leading-7 lg:leading-10">
            Our Commitment to a{" "}
            <span className="text-[#bab220]">Better Tomorrow </span>
          </h2>
          <div className=" text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-normal font-poppins text-[#3c3c3c] dark:text-[#3c3c3c]">
            <p>
              At Green Economy Partnership, our unwavering dedication is aimed
              at contributing to a more sustainable and eco-friendly future. Our
              team is committed to incorporating solar and wind energy as
              dependable forms of renewable power whenever feasible. This
              results in significant cost savings and plays a role in mitigating
              the far-reaching environmental effects associated with fossil
              fuels.
            </p>
            <p className="mt-2 lg:mt-4 ">
              To ensure the successful adoption of these clean energy sources,
              we actively advocate for solar and wind energy incentives within
              local communities, thereby bolstering the expansion of these
              sustainable resources. As an organization, we steadfastly uphold
              our responsibility to minimize our environmental footprint in
              every possible way, in line with our firm commitment to fostering
              a brighter and more sustainable future.
            </p>
          </div>
        </div>
        <div className="">
          <img
            className="h-full w-full rounded-lg"
            src={Powerof1}
            alt="Powerof"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
