import React from "react";
import bgImage1 from "../../../src/images/gepforest-card1.png";
import bgImage2 from "../../../src/images/gepforest-card2.png";
import bgImage3 from "../../../src/images/gepforest-card3.png";
import bgImage4 from "../../../src/images/gepforest-card4.png";
import bgImage5 from "../../../src/images/gepforest-card5.png";
import bgImage6 from "../../../src/images/gepforest-card6.png";
import bgImage7 from "../../../src/images/gepforest-card7.png";
import bgImage8 from "../../../src/images/gepforest-card8.png";

const GreenEconomyCanHelp = () => {
  const data = [
    {
      id: 1,
      img: bgImage1,
      description: "Plantations (Hardwoods)",
    },
    {
      id: 2,
      img: bgImage2,
      description: "Tropical High Forest THF",
    },
    {
      id: 3,
      img: bgImage3,
      description: "Woodland",
    },
    {
      id: 4,
      img: bgImage4,
      description: "Bushland",
    },
    {
      id: 5,
      img: bgImage5,
      description: "Grassland",
    },
    {
      id: 6,
      img: bgImage6,
      description: "Wetlands",
    },
    {
      id: 7,
      img: bgImage7,
      description: "Subsistence Farmland",
    },
    {
      id: 8,
      img: bgImage8,
      description: "Commercial Farms",
    },
  ];
  return (
    <div className="flex justify-center gap-8 flex-col px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[100px] mb-[50px]">
      <div className="heading">
        <h2 className="text-[#316D69] text-2xl mb-4 md:mb-6 lg:mb-8 md:text-3xl lg:text-4xl leading-7 lg:leading-10  font-montserrat font-bold">
          GEP Paves the Way for Various{" "}
          <span className="text-[#bab220]"> Projects to Flourish</span>
        </h2>
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((item) => (
          <div className="cards-text rounded-lg" key={item.id}>
            <img src={item.img} alt="" className="w-full h-full rounded-lg" />
            <p className="text-[#f7f5f2] bg-[#316D69] p-2 text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-normal font-poppins relative bottom-[80px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenEconomyCanHelp;
