import React from "react";

const InnerCard = () => {
  const data = [
    {
      id: 1,
      heading: "Wind Turbines",
      description:
        "They utilize the wind’s energy to generate renewable power for your home or business. ",
    },
    {
      id: 2,
      heading: "Solar Panels ",
      description:
        "They cut costs and contribute to environmental preservation through the adoption of solar energy.",
    },
    {
      id: 3,
      heading: "Clean Energy ",
      description:
        "Our commitment to clean energy aims to minimize your ecological footprint. ",
    },
    {
      id: 4,
      heading: "Sustainable Power ",
      description:
        "We help you save the environment with sustainable practices. ",
    },
  ];
  return (
    <div className="  px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mt-[30px] md:mt-[50px] lg:mt-[100px] pb-10">
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 ">
        {data.map((item) => (
          <div
            className="inner-cards text-center shadow-lg shadow-[#bab220] p-8"
            key={item.id}
          >
            <h6 className="uppercase text-sm md:text-base lg:text-lg text-[#BAB220] font-bold leading-7 lg:leading-9	font-montserrat">
              {item.heading}
            </h6>
            <p className=" mt-4 text-[#3c3c3c] font-poppins text-sm md:text-base lg:text-lg leading-5 lg:leading-7 font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnerCard;
