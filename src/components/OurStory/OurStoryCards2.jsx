import React from "react";
import img1 from "../../../src/images/ProjectIdentification1.svg";
import img2 from "../../../src/images/ProjectValuation1.svg";
import img3 from "../../../src/images/CertificationSupport1.svg";

function InnerCard(props) {
  return (
    <div className="rounded-md shadow-lg text-center flex flex-wrap items-center justify-center shadow-[#316D69] ">
      <div className="p-4 md:p-8">
        <img
          src={props.image}
          alt="icon"
          className="mx-auto mb-4 w-16 h-16 md:w-20 md:h-20"
        />
        <h3 className="text-base md:text-lg lg:text-xl leading-5 lg:leading-7 text-[#316D69] font-bold mb-2 md:mb-4">
          {props.heading}
        </h3>
        <p className="text-sm md:text-base lg:text-lg leading-5 lg:leading-7 text-[#3c3c3c] font-[400] md:px-4">
          {props.text}
        </p>
      </div>
    </div>
  );
}

function OurStoryCards2() {
  const details = [
    {
      image: img1,
      heading: "Project Identification",
      text: "GEP experts provide solutions that align with the green economy’s objectives, paving the path for sustainable initiatives.",
    },
    {
      image: img2,
      heading: "Project Valuation",
      text: "The GEP experts precisely evaluate the carbon credit potential of every project within certain standards such as Gold standard or Verra.",
    },
    {
      image: img3,
      heading: "Certification Support",
      text: "GEP supports carbon certification from drafting project design documents to the validation, registration, verification, and issuance milestones.",
    },
  ];

  return (
    <div className=" grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4 md:mt-8 lg:mt-12 mb-[50px] gap-6 px-[30px] md:px[60] lg:px-[80px] xl:px-[100px]">
      {details.map((el, index) => (
        <InnerCard
          key={index}
          image={el.image}
          heading={el.heading}
          text={el.text}
        />
      ))}
    </div>
  );
}

export default OurStoryCards2;
