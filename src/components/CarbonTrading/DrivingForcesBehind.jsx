import React from "react";
import grassland from "../../../src/images/paris-agreement.png";
import bushland from "../../../src/images/consumer-demand.png";
import wetland from "../../../src/images/technological-advancements.png";
import woodland from "../../../src/images/time-gaps.png";

const DrivingForcesBehind = () => {
  const DrivingForcesBehindCards = [
    {
      id: 1,
      image: grassland,
      title: "Paris Agreement ",
      description:
        "Companies seeking alignment with the objectives of the Paris Agreement.",
    },
    {
      id: 2,
      image: bushland,
      title: "Consumer Demand",
      description:
        "Companies investing in carbon offsets attract environmentally conscious consumers. ",
    },
    {
      id: 3,
      image: wetland,
      title: "Technological Advancements",
      description:
        "Better carbon measurements mean transparency in carbon offset projects.",
    },
    {
      id: 4,
      image: woodland,
      title: "Time Gaps ",
      description:
        "Companies do not have sufficient time to eliminate their carbon emissions.  ",
    },
  ];
  return (
    <div className="   mt-[30px] md:mt-[50px] lg:mt-[50px] mb-[50px] px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
      <h2 className=" mb-2 md:mb-4 lg:mb-6   font-montserrat text-[#316D69] text-2xl md:text-3xl lg:text-4xl leading-7 lg:leading-10 font-bold tracking-wide text-center ">
        Driving Forces Behind Carbon Offset Market
      </h2>
      <div className="grid gird-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 text-center items-center">
        {DrivingForcesBehindCards.map((items) => (
          <div className="w-[100%] " key={items.id}>
            <div className="flex flex-col ">
              <img
                src={items.image}
                alt=""
                className="h-[200px] w-[200px] rounded-full shadow-2xl hover:rounded-lg hover:shadow-2xl mx-auto"
              />
              <h4 className="font-montserrat text-lg md:text-lg lg:text-xl leading-7 lg:leading-9 font-bold text-[#bab220] mt-10 h-[60px] md:h-[40px] lg:h-[60px]">
                {items.title}
              </h4>
              <p className="text-sm md:text-base lg:text-lg font-poppins font-normal text-[#3c3c3c] leading-5 lg:leading-7 h-[100px] ">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrivingForcesBehind;
