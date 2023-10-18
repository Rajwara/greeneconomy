import React from "react";
import img1 from "../../../src/images/ProjectIdentification1.svg";
import img2 from "../../../src/images/ProjectValuation1.svg";
import img3 from "../../../src/images/CertificationSupport1.svg";

function InnerCard(props) {
  return (
    <div className=" rounded-md shadow-lg text-center flex flex-wrap items-center justify-center shadow-[#316D69] ">
      <div className="p-8">
        <img src={props.image} alt="icon" className="mx-auto mb-4 w-20 h-20" />{" "}
        {/* Center the image */}
        <h3 className=" text-sm md:text-base lg:text-lg leading-7 lg:leading-9 text-[#316D69] font-bold mb-4 h-[20px]">
          {props.heading}
        </h3>
        <p className="xs:mt-[8px] text-sm md:text-base leading-5 lg:leading-7 lg:text-lg text-[#3c3c3c] font-[400] lg:px-[20px] h-[130px]">
          {props.text}
        </p>
      </div>
    </div>
  );
}

function OurStoryCards2() {
  const datials = [
    {
      image: img1,
      heading: "Project Identification ",
      text: "GEP experts provide solutions that align with the green economy’s objectives, paving the path for sustainable initiatives.      ",
    },
    {
      image: img2,
      heading: "Project Valuation",
      text: "The GEP experts precisely evaluate the carbon credit potential of every project within certain standards such as Gold standard or Verra. ",
    },
    {
      image: img3,
      heading: "Certification Support",
      text: "GEP supports carbon certification from drafting project design documents to the validation, registration, verification, and issuance milestones.      ",
    },
  ];

  return (
    <div className=" ">
      <div className="   px-[30px] md:px-[60] lg:px-[80px] xl:px-[100px]  grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-[30px] md:mt-[50px] lg:mt-[100px] mb-[100px] gap-8">
        {datials.map((el) => (
          <InnerCard image={el.image} heading={el.heading} text={el.text} />
        ))}
      </div>
    </div>
  );
}
export default OurStoryCards2;
