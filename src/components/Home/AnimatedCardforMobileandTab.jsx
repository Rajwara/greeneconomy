import React from "react";
import image1 from "../../../src/images/Nature-Based-Solutions-Card.jpg";
import image2 from "../../../src/images/Renewable-Energy-Card.jpg";
import image3 from "../../../src/images/waste-management-Card.jpg";
import image4 from "../../../src/images/Carbon-credits-Card.jpg";

const AnimatedCardforMobileandTab = () => {
  const carddata = [
    {
      id: 1,
      title: "Nature-Based Assets  ",
      imageSrc: image1,
      btntext: "Read More",
      description:
        "The  Nature-Based Solutions utilize assets like sustainable forestry, blue carbon, and climate-smart agriculture for a sustainable future.",
    },
    {
      id: 2,
      title: "Wind and Solar  ",
      imageSrc: image2,
      btntext: "Read More",
      description:
        "GEP promotes cost-effective wind and solar solutions as vital renewable energy sources in the fight against climate change. ",
    },
    {
      id: 3,
      title: "Anaerobic Digestion  ",
      imageSrc: image3,
      btntext: "Read More",
      description:
        "Anaerobic digestion is a sustainable process converting organic matter to efficient gas and nutrient-rich digestate, supporting waste management.",
    },
    {
      id: 4,
      title: "Carbon Credits  ",
      imageSrc: image4,
      btntext: "Read More",
      description:
        "GEP specializes in carbon trading that transforms CO2 into an economic commodity, driving sustainability by reducing global GHG emissions.",
    },
  ];

  return (
    <>
      <div className=" px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] mb-[50px] -mt-[170px] lg:hidden xl:hidden">
        <div className=" cards grid grid-cols-1 md:grid-cols-2  text-center gap-8">
          {carddata.map((item) => (
            <div
              className=" inner-cards  p-6 shadow-lg shadow-[#316d69] rounded-lg"
              key={item.id}
            >
              <img src={item.imageSrc} alt="" className="rounded-lg" />

              <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl mt-4 font-bold text-[#316D69] leading-7 xl:leading-10 font-montserrat font">
                {item.title}
              </h2>

              <p className="font-poppins text-sm md:text-base xl:text-lg mt-4 leading-5 xl:leading-7 font-normal text-[#3c3c3c]">
                {" "}
                {item.description}
              </p>
              <button
                href="/about"
                className="rounded text-sm md:text-base xl:text-lg leading-5 xl:leading-7 mt-4 font-montserrat font-normal px-6 py-2 bg-[#316d69] text-white hover:bg-[#3c3c3c]"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AnimatedCardforMobileandTab;
