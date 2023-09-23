import React from "react";

import img1 from "../../../src/images/identification-icon.png";
import img2 from "../../../src/images/valuation-icon.png";
import img3 from "../../../src/images/certification-icon.png";
function InnerCard(props) {
  return (
    <div className="py-[20px] bg-[#EFEDD1] xs:mb-[10px] rounded-md shadow-lg text-center flex flex-col items-center justify-center shadow-[#BAB220]">
      <div className="xs:px-[15px]">
        <img src={props.image} alt="icon" className="mx-auto mb-4" />{" "}
        {/* Center the image */}
        <h3 className="xs:mt-[8px] text-[18px] text-[#316D69] font-[500]">
          {props.heading}
        </h3>
        <p className="xs:mt-[8px] text-[14px] md:text-[16px] lg:text-[18px] font-[400] lg:px-[20px]">
          {props.text}
        </p>
      </div>
    </div>
  );
}

function AboutCards2() {
  const datials = [
    {
      image: img1,
      heading: "Project Identification",
      text: "We at Green Economy are committed to finding innovative ways to reduce carbon emissions. Our team of experts specialize in a wide range of project activities, such as exploration of forestry, agriculture and blue carbon that offer potential for rewarding credits under Article 6.2 of Paris Agreement and other incentives aligned with the global effort towards sustainability.",
    },
    {
      image: img2,
      heading: "Project Valuation",
      text: "Green Economy Partnership provides thorough assessments of projects, determining their eligibility for international carbon credits standards such as GEP-VCS, Gold Standard or Verra Additionally, each project is given a unique potential valuation based on the benefits it brings to its local region.",
    },
    {
      image: img3,
      heading: "Certification Support",
      text: "The Green Economy Partnership is a pioneer in the carbon certification process, offering comprehensive guidance from declaration to completion. Their expertise guarantees maximum efficiency and accuracy throughout the milestones of drafting, registration, verification AND issuance!",
    },
  ];

  return (
    <div className=" xs:py-[10px] -mt-[30px]">
      <div className=" gap-y-[20px] lg:gap-y-0 xs:relative lg:relative  px-[30px] md:px[60] lg:px-[80px] xl:px-[100px]  gap-x-[20px] grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:-mt-16 md:-mt-[68px] xs:-mt-[70px] ">
        {datials.map((el) => (
          <InnerCard image={el.image} heading={el.heading} text={el.text} />
        ))}
      </div>
    </div>
  );
}
export default AboutCards2;
