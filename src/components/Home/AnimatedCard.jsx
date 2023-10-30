import React from "react";
import "./AnimatedCard.css";
import image1 from "../../../src/images/Nature-Based-Solutions-Card.jpg";
import image2 from "../../../src/images/Renewable-Energy-Card.jpg";
import image3 from "../../../src/images/waste-management-Card.jpg";
import image4 from "../../../src/images/Carbon-credits-Card.jpg";

const Card = ({ color, title, imageSrc, description }) => {
  return (
    <div className="hidden md:hidden lg:block xl:block">
      <div className="card " style={{ "--clr": color }}>
        <div className="img-box ">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="content">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold text-[#316D69] leading-7 xl:leading-10 font-montserrat font">
            {title}
          </h2>

          <p className="font-poppins text-sm md:text-base xl:text-lg leading-5 xl:leading-7 font-normal text-[#3c3c3c]">
            {" "}
            {description}
          </p>
          <a href="/about" className="rounded text-sm md:text-base xl:text-lg">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

function AnimatedCard() {
  return (
    <div className=" container_c animated_container mx-auto px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] ">
      <Card
        color="#316D69"
        title="Nature-Based Assets  "
        imageSrc={image1}
        description="The  Nature-Based Solutions utilize assets like sustainable forestry, blue carbon, and climate-smart agriculture for a sustainable future."
      />
      <Card
        color="#BAB220"
        title="Wind and Solar"
        imageSrc={image2}
        description="GEP promotes cost-effective wind and solar solutions as vital renewable energy sources in the fight against climate change. "
      />
      <Card
        color="#316D69"
        title=" Anaerobic Digestion "
        imageSrc={image3}
        description="Anaerobic digestion is a sustainable process converting organic matter to efficient gas and nutrient-rich digestate, supporting waste management."
      />
      <Card
        color="#316D69"
        title="Carbon Credits  "
        imageSrc={image4}
        description="GEP specializes in carbon trading that transforms CO2 into an economic commodity, driving sustainability by reducing global GHG emissions."
      />
    </div>
  );
}
export default AnimatedCard;
