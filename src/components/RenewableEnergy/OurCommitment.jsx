import React from "react";
import Powerof1 from "../../../src/images/The-power-of-renewables-1.png";

const OurCommitment = () => {
  return (
    <div className="py-8   dark:bg-gray-800 py-26  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[50px] mb-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col ">
          <h2 className=" text-4xl font-bold leading-7 font-montserrat tracking-normal text-[#3c3c3c] dark:text-white sm:text-3xl sm:leading-9">
            Our Commitment to a{" "}
            <span className="text-[#bab220]">Better Tomorrow </span>
          </h2>
          <p className="mt-8 text-lg leading-7 font-normal font-poppins text-[#3c3c3c] dark:text-gray-300">
            At Green Economy Partnership, our unwavering dedication is aimed at
            contributing to a more sustainable and eco-friendly future. Our team
            is committed to incorporating solar and wind energy as dependable
            forms of renewable power whenever feasible. This results in
            significant cost savings and plays a role in mitigating the
            far-reaching environmental effects associated with fossil fuels.
          </p>
          <p className="mt-4 text-lg leading-7 font-normal font-poppins text-[#3c3c3c] dark:text-gray-300">
            To ensure the successful adoption of these clean energy sources, we
            actively advocate for solar and wind energy incentives within local
            communities, thereby bolstering the expansion of these sustainable
            resources. As an organization, we steadfastly uphold our
            responsibility to minimize our environmental footprint in every
            possible way, in line with our firm commitment to fostering a
            brighter and more sustainable future.
          </p>
        </div>
        <div className="">
          <div className="">
            <img
              className="w-full h-full rounded-lg  "
              src={Powerof1}
              alt="2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
