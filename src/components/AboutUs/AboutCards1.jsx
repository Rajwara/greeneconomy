import React from "react";
import missionIcon from "../../../src/images/our-mission-icon.png";
import visionIcon from "../../../src/images/our-vision-icon.png";

function InnerCard(props) {
  return (
    <div className="py-[10px] bg-[#EFEDD1]  xs:mb-[10px] rounded-md shadow-lg  flex flex-col items-center justify-center shadow-[#BAB220]">
      <div className="xs:px-[15px]">
        <img src={props.img} alt="icon" className="mx-auto mb-4" />
        <h3 className="xs:mt-[8px] text-[18px] font-[500] text-[#BAB220] text-center ">
          {props.heading}
        </h3>
        <p className="xs:mt-[8px] text-[14px] md:text-[16px] lg:text-[18px] font-[400] lg:px-[20px]">
          {props.text1}
        </p>
        <p className="xs:mt-[8px] text-[14px] md:text-[16px] lg:text-[18px] font-[400] lg:px-[20px]">
          {props.text2}
        </p>
        <p className="xs:mt-[8px] text-[14px] md:text-[16px] lg:text-[18px] font-[400] lg:px-[20px]">
          {props.text3}
        </p>
      </div>
    </div>
  );
}

function AboutCards1() {
  const datials = [
    {
      img: missionIcon,
      text1:
        "At Green Economy Partnership, we are dedicated to achieving our mission of accelerating the implementation of carbon dioxide removal (CDR) technologies to reach net zero emissions targets. We believe that CDR has the potential to reverse climate change and restore our planet's ecosystems, but only if it is made accessible, affordable, and effective for all organizations.",
      text2:
        "We are working tirelessly to promote the use of CDR technologies and make them a standard part of organizations' efforts to reduce their carbon footprint. We are dedicated to working with companies, governments, and individuals to create a world where CDR is not just an option, but a necessary and integral part of reaching net zero emissions.",
      text3:
        "We believe that by working together, we can make a real difference in the fight against climate change. Join us in our mission to create a greener future for all by accelerating the implementation of CDR technologies.",
      heading: "Our Mission",
    },
    {
      img: visionIcon,
      text1:
        "At Green Economy Partnership, we have a bold and ambitious vision for the future. Our vision is to be at the forefront of developing and implementing forestry and blue carbon management strategies that utilize innovative Carbon Capture and Ecosystem Services (CCES) solutions.",
      text2:
        "We believe that by working closely with governments and private land owners, we can create the infrastructure and technology necessary to streamline environmental objectives, while also providing job opportunities to communities and promoting economic growth. We understand that it's not just about reducing emissions, but actively removing CO2 from the atmosphere through reforestation projects and CCES technologies.",
      text3:
        "Our goal is to create a world where the economy and the environment thrive in harmony, where innovative solutions are used to reduce carbon emissions, and where we are not just mitigating the impacts of climate change but reversing them. We are dedicated to making this vision a reality and leading the way towards a sustainable and harmonious future for all.",
      heading: "Our Vision",
    },
  ];

  return (
    <div className="xs:py-[10px]  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px] ">
      <div className=" gap-x-5 gap-y-[20px] lg:gap-y-0 lg:gap-x-[70px] xs:relative lg:relative grid grid-cols-1 md:grid-cols-2 lg:-mt-16 md:-mt-[68px] xs:-mt-[90px]">
        {datials.map((el, index) => (
          <InnerCard
            key={index}
            heading={el.heading}
            text1={el.text1}
            text2={el.text2}
            text3={el.text3}
            img={el.img}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutCards1;
