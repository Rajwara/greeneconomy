import React from "react";
import bgImage from "../../../src/images/Family-farm.jpeg";

const GreenEconomyCanHelp = () => {
  const data = [
    {
      id: 1,
      img: bgImage,
      description: "Plantations (Hardwoods)",
    },
    {
      id: 2,
      img: bgImage,
      description: "Tropical High Forest THF",
    },
    {
      id: 3,
      img: bgImage,
      description: "Woodland",
    },
    {
      id: 4,
      img: bgImage,
      description: "Bushland",
    },
    {
      id: 5,
      img: bgImage,
      description: "Grassland",
    },
    {
      id: 6,
      img: bgImage,
      description: "Wetlands",
    },
    {
      id: 7,
      img: bgImage,
      description: "Subsistence Farmland",
    },
    {
      id: 8,
      img: bgImage,
      description: "Commercial Farms",
    },
  ];
  return (
    <div className="flex justify-center gap-8  flex-col px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[100px] mb-[50px]">
      <div className="heading">
        <h2 className="text-[#316D69] text-xl mb-8 md:text-2xl lg:text-4xl leading-7 tracking-normal font-montserrat font-bold">
          GEP Paves the Way for Various{" "}
          <span className="text-[#bab220]"> Projects to Flourish</span>
        </h2>
      </div>

      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {data.map((item) => (
          <div className="cards-text rounded-lg" key={item.id}>
            <img src={item.img} alt="" className="w-full h-[300px]" />
            <p className="text-[#f7f5f2] bg-[#316D69] p-2 text-lg leading-7 font-normal font-poppins relative bottom-[80px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenEconomyCanHelp;
