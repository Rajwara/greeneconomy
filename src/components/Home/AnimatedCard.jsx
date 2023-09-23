import React from "react";
import "./AnimatedCard.css";
import image1 from "../../../src/images/1.jpg";
import image2 from "../../../src/images/2.jpg";
import image3 from "../../../src/images/3.jpg";

const Card = ({ color, title, imageSrc, description }) => {
  return (
    <div className=" ">
      <div className="card" style={{ "--clr": color }}>
        <div className="img-box ">
          <img src={imageSrc} alt={title} />
        </div>
        <div className="content">
          <h2 className="text-2xl font-bold text-[#3c3c3c] font-montserrat font">
            {title}
          </h2>

          <p className="font-poppins text-lg text-[#3c3c3c]"> {description}</p>
          <a href="/about" className="rounded">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default function AnimatedCard() {
  return (
    <div className=" container_c animated_container mx-auto px-[30px] md:px-[60px] lg:px-[80px] xl:px-[100px] ">
      <Card
        color="#316D69"
        title="Forest"
        imageSrc={image1}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!"
      />
      <Card
        color="#BAB220"
        title="Blue Carbon"
        imageSrc={image2}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!"
      />
      <Card
        color="#316D69"
        title="Agriculture"
        imageSrc={image3}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!"
      />
    </div>
  );
}
